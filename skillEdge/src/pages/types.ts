export interface JobCategory {
    id: string;
    name: string;
    roles: string[];
  }
  
  export interface AnalysisResult {
    score: number;
    missingKeywords: string[];
    improvements: string[];
    formatSuggestions: string[];
  }
  
  export interface FileUploadState {
    file: File | null;
    isDragging: boolean;
  }