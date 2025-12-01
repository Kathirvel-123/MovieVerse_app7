const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
  <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-0">
    <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-end gap-3 sm:gap-4">
      
      
      <div className="relative group flex-1 min-w-0">
        <input
          type="text"
          placeholder="Enter movie name..."
          className="w-full p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl bg-gray-900/80 backdrop-blur-md text-white placeholder-gray-500 border border-gray-700 hover:border-purple-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-0.5 sm:hover:-translate-y-1 text-sm sm:text-base md:text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
        <div className="absolute -bottom-1 left-3 sm:left-4 w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-left opacity-0 group-hover:opacity-100" />
      </div>

     
      <button
        onClick={onSearch}
        className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-b from-gray-800 to-gray-900 hover:from-purple-600 hover:to-purple-800 text-white font-bold rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-purple-500/25 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-purple-500/30 flex items-center justify-center whitespace-nowrap text-sm sm:text-base md:text-lg min-h-[44px] sm:min-h-[52px]"
        disabled={!query.trim()}
      >
        Search
      </button>
    </div>
  </div>
);

};


export default SearchBar;