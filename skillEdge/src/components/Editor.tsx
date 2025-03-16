import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import { Bold, Italic, List, Link as LinkIcon, Highlighter } from 'lucide-react';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export const Editor = ({ content, onChange, placeholder }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Color,
      TextStyle,
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          class: 'highlighted-text',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-400 hover:text-blue-300 underline',
        },
        protocols: ['http', 'https', 'mailto', 'tel'],
      }),
      Placeholder.configure({
        placeholder: placeholder || 'Take a note...',
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  const toggleLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = previousUrl;

    if (url === null) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const setHighlight = () => {
    const colors = ['#374151', '#1e3a8a', '#065f46', '#713f12', '#4c1d95'];
    const currentColor = editor.getAttributes('highlight').color;
    const nextColorIndex = colors.indexOf(currentColor) + 1;
    const color = colors[nextColorIndex] || colors[0];
    
    editor.chain().focus().toggleHighlight({ color }).run();
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg border border-gray-800">
      <div className="flex flex-wrap gap-2 p-2 border-b border-gray-800">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive('bold') ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
          }`}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive('italic') ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
          }`}
          title="Italic"
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive('bulletList') ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
          }`}
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          onClick={toggleLink}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive('link') ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
          }`}
          title="Toggle Link"
        >
          <LinkIcon size={18} />
        </button>
        <button
          onClick={setHighlight}
          className={`p-2 rounded hover:bg-gray-700 transition-colors ${
            editor.isActive('highlight') ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
          }`}
          title="Highlight Text"
        >
          <Highlighter size={18} />
        </button>
      </div>
      <EditorContent 
        editor={editor} 
        className="prose max-w-none p-4" 
      />
    </div>
  );
};