import { X } from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'react-share';

interface SharePopupProps {
  url: string;
  title: string;
  onClose: () => void;
}

export const SharePopup = ({ url, title, onClose }: SharePopupProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl p-6 max-w-sm w-full mx-4 border border-gray-700/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Share Article</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors hover:rotate-90 transform duration-200"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <FacebookShareButton url={url} className="w-full">
            <div className="bg-[#1877f2] text-white py-3 px-4 rounded-lg hover:bg-[#1877f2]/90 transition-colors text-center font-medium">
              Facebook
            </div>
          </FacebookShareButton>
          
          <TwitterShareButton url={url} title={title} className="w-full">
            <div className="bg-[#1da1f2] text-white py-3 px-4 rounded-lg hover:bg-[#1da1f2]/90 transition-colors text-center font-medium">
              Twitter
            </div>
          </TwitterShareButton>
          
          <LinkedinShareButton url={url} title={title} className="w-full">
            <div className="bg-[#0a66c2] text-white py-3 px-4 rounded-lg hover:bg-[#0a66c2]/90 transition-colors text-center font-medium">
              LinkedIn
            </div>
          </LinkedinShareButton>
          
          <WhatsappShareButton url={url} title={title} className="w-full">
            <div className="bg-[#25d366] text-white py-3 px-4 rounded-lg hover:bg-[#25d366]/90 transition-colors text-center font-medium">
              WhatsApp
            </div>
          </WhatsappShareButton>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-400">Or copy link:</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={url}
              readOnly
              className="flex-1 bg-gray-900/50 text-white px-3 py-2 rounded-lg text-sm border border-gray-700/50 focus:outline-none focus:border-blue-500/50"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(url);
                alert('Link copied!');
              }}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600/50"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};