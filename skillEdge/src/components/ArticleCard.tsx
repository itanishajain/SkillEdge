import React from 'react';
import { Heart, Share2, Bookmark, Clock, User } from 'lucide-react';
import { Article } from '@/types/article';


interface ArticleCardProps {
  article: Article;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
  onShare: (id: string) => void;
  isLiked: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onLike,
  onSave,
  onShare,
  isLiked,
}) => {
  const handleArticleClick = () => {
    window.open(article.sourceUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all">
      <div 
        className="relative cursor-pointer group"
        onClick={handleArticleClick}
      >
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-medium">Read Full Article →</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-sm text-gray-400">{article.source}</span>
        </div>
        <h2 
          className="text-xl font-bold mb-2 text-white hover:text-blue-400 cursor-pointer transition-colors"
          onClick={handleArticleClick}
        >
          {article.title}
        </h2>
        <p className="text-gray-300 mb-4 line-clamp-3">{article.content}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLike(article.id);
              }}
              className={`flex items-center space-x-1 transition-colors ${
                isLiked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
              }`}
              disabled={isLiked}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{article.likes}</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSave(article.id);
              }}
              className={`text-gray-400 hover:text-blue-400 transition-colors ${
                article.saved ? 'text-blue-400' : ''
              }`}
            >
              <Bookmark className={`w-5 h-5 ${article.saved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShare(article.id);
              }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <span className="text-sm text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};