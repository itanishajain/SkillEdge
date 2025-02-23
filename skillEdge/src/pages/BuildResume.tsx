import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { oneDark } from '@codemirror/theme-one-dark';
import { Download, Wand2, Sun, Moon, AlertCircle } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import OpenAI from 'openai';

// Initialize OpenAI client
const openaiClient = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface ResumeData {
  basics: {
    name: string;
    label: string;
    email: string;
    phone: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }>;
  education: Array<{
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
  }>;
  skills: Array<{
    name: string;
    keywords: string[];
  }>;
}

const defaultResumeData: ResumeData = {
  basics: {
    name: "John Doe",
    label: "Senior Software Engineer",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    summary: "Experienced software engineer with a passion for building scalable applications and solving complex problems.",
  },
  experience: [
    {
      company: "Tech Corp",
      position: "Senior Software Engineer",
      startDate: "2020",
      endDate: "Present",
      highlights: [
        "Led development of microservices architecture",
        "Mentored junior developers",
        "Improved system performance by 40%"
      ]
    }
  ],
  education: [
    {
      institution: "University of Technology",
      area: "Computer Science",
      studyType: "Bachelor",
      startDate: "2012",
      endDate: "2016"
    }
  ],
  skills: [
    {
      name: "Programming Languages",
      keywords: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      name: "Frameworks",
      keywords: ["React", "Node.js", "Express", "Django"]
    }
  ]
};

const templates = {
  modern: {
    headerClass: "text-center mb-8",
    nameClass: "text-4xl font-bold mb-2",
    sectionClass: "mb-8",
    sectionTitleClass: "text-2xl font-bold mb-4 border-b-2 pb-2",
    skillsLayout: "grid grid-cols-2 gap-4",
    skillBadgeClass: "px-3 py-1 rounded-full text-sm",
  },
  classic: {
    headerClass: "border-b-4 border-gray-800 dark:border-gray-200 mb-8 pb-4",
    nameClass: "text-5xl font-serif mb-2",
    sectionClass: "mb-10",
    sectionTitleClass: "text-2xl font-serif mb-4 uppercase tracking-wider",
    skillsLayout: "flex flex-wrap gap-4",
    skillBadgeClass: "px-4 py-2 border rounded-md",
  },
  minimal: {
    headerClass: "mb-12",
    nameClass: "text-3xl font-light mb-1",
    sectionClass: "mb-6",
    sectionTitleClass: "text-lg font-medium mb-3 uppercase",
    skillsLayout: "columns-2",
    skillBadgeClass: "inline-block mr-2 mb-2",
  }
};

export const BuildResume: React.FC = () => {
  const [editorContent, setEditorContent] = useState(
    JSON.stringify(defaultResumeData, null, 2)
  );
  const [previewData, setPreviewData] = useState<ResumeData>(defaultResumeData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [textToImprove, setTextToImprove] = useState<string>('');  

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value);
    setTextToImprove(value); // Update textToImprove when editor content changes
    try {
      const parsed = JSON.parse(value);
      setPreviewData(parsed);
    } catch {
      // Handle parse errors silently
    }
  }, []);

  const handleGetSuggestions = useCallback(async () => {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      setError('OpenAI API key is not configured. Please check your environment variables.');
      return;
    }
    setIsLoading(true);
    setError(null);
    
    try {
      const selection = window.getSelection()?.toString() || ''; 
      
      // Use `textToImprove` instead of creating a new variable
      const textToImproveToUse = selection || textToImprove; // Using the state variable

      const isPartialSelection = selection !== '';

      // Construct the prompt with the selected text or the full resume content
      const prompt = isPartialSelection
        ? `Improve this resume section with more impactful descriptions: ${textToImproveToUse}`
        : `Improve this resume with more impactful descriptions and achievements. Return the improved JSON in the exact same format: ${JSON.stringify(previewData)}`;
      // Proceed with your API call using the constructed prompt
      // e.g., call your AI suggestion API here

      console.log('Generated Prompt:', prompt);
      const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: isPartialSelection
            ? "You are a professional resume writer. Improve the selected text to be more impactful and professional. Return only the improved text."
            : "You are a professional resume writer. Analyze the resume and provide specific, actionable improvements. Return ONLY the improved JSON resume in the exact same format."
          },
          {
            role: "user",
            content: prompt
          }
        ]
      });

      const suggestions = response.choices[0]?.message?.content;
      if (suggestions) {
        if (isPartialSelection) {
          // If it's a partial selection, update just that part in the editor
          const newContent = editorContent.replace(selection, suggestions);
          setEditorContent(newContent);
          try {
            const parsed = JSON.parse(newContent);
            setPreviewData(parsed);
          } catch {
            setError('Failed to parse the updated JSON. Please check the format.');
          } 
        }

        else {
          try {
            // If it's the full resume, update everything
            const parsedSuggestions = JSON.parse(suggestions);
            setEditorContent(JSON.stringify(parsedSuggestions, null, 2));
            setPreviewData(parsedSuggestions);
          } catch {
            setError('Received invalid JSON from AI. Please try again.');
          }
        }
      }
    } catch (error: unknown) {
      console.error('Error getting AI suggestions:', error);
      if ((error as Error)?.message?.includes('429')) {
        setError('API rate limit exceeded. Please check your OpenAI account billing status or try again later.');
      } else {
        setError((error as Error)?.message || 'Failed to get AI suggestions. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [previewData, textToImprove, editorContent]);

  const handleDownload = useCallback(async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    setIsGeneratingPDF(true);
    
    try {
      const opt = {
        margin: [0.5, 0.5],
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait'
        },
        pagebreak: { mode: 'avoid-all' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const currentTemplate = templates[selectedTemplate as keyof typeof templates];

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Editor Section */}
      <div className="w-1/2 border-r border-gray-700">
        <div className={`h-full flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex flex-col p-4 border-b border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Resume Editor
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-md ${
                    isDarkMode 
                      ? 'hover:bg-gray-700 text-white' 
                      : 'hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <select
                  value={editorContent}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  
                  
                  className={`px-3 py-1 rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white border-gray-700' 
                      : 'bg-gray-100 text-gray-900 border-gray-200'
                  } border`}
                >
                  <option value="modern">Modern Template</option>
                  <option value="classic">Classic Template</option>
                  <option value="minimal">Minimal Template</option>
                </select>
                <button
                  onClick={handleGetSuggestions}
                  disabled={isLoading}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-indigo-700'
                  } ${
                    isDarkMode
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  <Wand2 size={18} />
                  {isLoading ? 'Getting Suggestions...' : 'Get AI Suggestions'}
                </button>
                <button
                  onClick={handleDownload}
                  disabled={isGeneratingPDF}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isGeneratingPDF
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-green-700'
                  } ${
                    isDarkMode
                      ? 'bg-green-600 text-white'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  <Download size={18} />
                  {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                </button>
              </div>
            </div>
            {error && (
              <div className="flex items-center gap-2 p-2 mt-2 text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200 rounded-md">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}
          </div>
          <div className="flex-1 overflow-auto">
            <CodeMirror
              value={editorContent}
              height="100%"
              theme={isDarkMode ? oneDark : undefined}
              extensions={[json()]}
              onChange={handleEditorChange}
              className="h-full"
              basicSetup={{
                lineNumbers: true,
                highlightActiveLineGutter: true,
                highlightSpecialChars: true,
                foldGutter: true,
                drawSelection: true,
                dropCursor: true,
                allowMultipleSelections: true,
                indentOnInput: true,
                bracketMatching: true,
                closeBrackets: true,
                autocompletion: true,
                rectangularSelection: true,
                crosshairCursor: true,
                highlightActiveLine: true,
                highlightSelectionMatches: true,
                closeBracketsKeymap: true,
                defaultKeymap: true,
                searchKeymap: true,
                historyKeymap: true,
                foldKeymap: true,
                completionKeymap: true,
                lintKeymap: true,
              }}
            />
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-1/2">
        <div 
          className={`h-full overflow-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} p-8`} 
          id="resume-preview"
        >
          <div className="max-w-4xl mx-auto">
            <header className={currentTemplate.headerClass}>
              <h1 className={`${currentTemplate.nameClass} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {previewData.basics.name}
              </h1>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                {previewData.basics.label}
              </p>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                <p>{previewData.basics.email} | {previewData.basics.phone}</p>
              </div>
            </header>

            <section className={currentTemplate.sectionClass}>
              <h2 className={`${currentTemplate.sectionTitleClass} ${isDarkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'}`}>
                Professional Summary
              </h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                {previewData.basics.summary}
              </p>
            </section>

            <section className={currentTemplate.sectionClass}>
              <h2 className={`${currentTemplate.sectionTitleClass} ${isDarkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'}`}>
                Experience
              </h2>
              {previewData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {exp.position}
                  </h3>
                  <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                    {exp.company} | {exp.startDate} - {exp.endDate}
                  </div>
                  <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className={currentTemplate.sectionClass}>
              <h2 className={`${currentTemplate.sectionTitleClass} ${isDarkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'}`}>
                Education
              </h2>
              {previewData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {edu.institution}
                  </h3>
                  <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {edu.studyType} in {edu.area} | {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className={`${currentTemplate.sectionTitleClass} ${isDarkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'}`}>
                Skills
              </h2>
              <div className={currentTemplate.skillsLayout}>
                {previewData.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      {skill.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className={`${currentTemplate.skillBadgeClass} ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-200' 
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildResume;