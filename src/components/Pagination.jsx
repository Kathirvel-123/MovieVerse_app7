const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex items-center justify-center gap-6 p-4">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
        className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-purple-800 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold text-xs xs:text-sm sm:text-base md:text-lg rounded-xl shadow-lg hover:from-purple-700 hover:to-purple-900 disabled:hover:from-gray-700 disabled:hover:to-gray-800 hover:shadow-xl hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-200 border border-purple-500/50 flex-1 sm:flex-none min-w-[100px] xs:min-w-[110px] sm:min-w-[130px]"


      >
        <span className="flex items-center gap-2">
          ← Previous
        </span>
      </button>

 
      <div className="text-center">
        <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
          Page {page}
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto mt-2 shadow-md" />
      </div>

     
      <button
        onClick={() => setPage((p) => p + 1)}
        className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold text-xs xs:text-sm sm:text-base md:text-lg rounded-xl shadow-lg hover:from-purple-700 hover:to-purple-900 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-purple-500/50 flex-1 sm:flex-none min-w-[100px] xs:min-w-[110px] sm:min-w-[130px]"


      >
        <span className="flex items-center gap-2">
          Next →
        </span>
      </button>
    </div>
  );
};

export default Pagination;
