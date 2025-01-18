interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show
    
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    const end = Math.min(totalPages, start + showPages - 1);
    
    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-12 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-gray-700/50 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600/50 transition-colors border border-gray-600/50 disabled:hover:bg-gray-700/50"
      >
        Previous
      </button>
      
      <div className="flex gap-2">
        {getPageNumbers().map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg transition-all transform hover:scale-105 ${
              currentPage === page
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-gray-700/50 text-white hover:bg-gray-600/50 border-gray-600/50'
            } border`}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-gray-700/50 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600/50 transition-colors border border-gray-600/50 disabled:hover:bg-gray-700/50"
      >
        Next
      </button>
    </div>
  );
};