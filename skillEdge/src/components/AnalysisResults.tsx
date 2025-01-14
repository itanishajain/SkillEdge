import React from 'react';

import { CircularProgress } from './CircularProgress';
import { AnalysisResult } from '@/pages/types';

interface AnalysisResultsProps {
  results: AnalysisResult;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-center">
        <CircularProgress percentage={results.score} />
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Missing Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {results.missingKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-900 text-white rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Improvements</h3>
          <ul className="list-disc list-inside text-gray-300">
            {results.improvements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Format Suggestions</h3>
          <ul className="list-disc list-inside text-gray-300">
            {results.formatSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>

        <button>
        </button>
      </div>
    </div>
  );
};