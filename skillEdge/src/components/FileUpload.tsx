import React from 'react';
import { Upload } from 'lucide-react';
import { FileUploadState } from '../../src/pages/types';

interface FileUploadProps {
  fileState: FileUploadState;
  onFileChange: (file: File) => void;
  setIsDragging: (isDragging: boolean) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  fileState,
  onFileChange,
  setIsDragging,
}) => {
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files?.[0]) {
      const file = files[0];
      if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        onFileChange(file);
      }
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
        ${fileState.isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
        ${!fileState.file ? 'hover:border-blue-500 hover:bg-gray-950' : ''}`}
      onDragEnter={(e) => {
        handleDrag(e);
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        handleDrag(e);
        setIsDragging(false);
      }}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept=".pdf,.docx"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFileChange(file);
        }}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center gap-2"
      >
        <Upload className="w-12 h-12 text-gray-400" />
        {fileState.file ? (
          <p className="text-gray-600">{fileState.file.name}</p>
        ) : (
          <p className="text-gray-600">
            Drag & drop your resume here or click to browse
          </p>
        )}
        <p className="text-sm text-gray-400">Supported formats: PDF, DOCX</p>
      </label>
    </div>
  );
};