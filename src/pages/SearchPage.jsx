import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { searchMovies } from "../services/omdbApi";
import Navbar from "../components/Navbar";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const defaultMovies = [
  {
  "Title": "Fight Club",
  "Year": "1999",
  "imdbID": "tt0137523",
  "Poster": "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg"
},
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    imdbID: "tt0111161",
    Poster:
      "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Poster:
      "https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SY679_.jpg"
  },
  { Title: "The Dark Knight",
     Year: "2008", 
     imdbID: "tt0468569",
     Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    Title: "The Matrix",
    Year: "1999",
    imdbID: "tt0133093",
    Poster:
      "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg"
  },
];

  const handleSearch = async () => {
    if (!query.trim()) return;

    const data = await searchMovies(query, page, type);

    if (data.Response === "True") {
      setMovies(data.Search);
      setError("");
    } else {
      setMovies([]);
      setError(data.Error);
    }
  };

  useEffect(() => {
    if (query) handleSearch();
  }, [page, type]);

  return (
  <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
  <div className="w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">


      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 tracking-tight[-0.05em] xs:tracking-tighter bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm xs:drop-shadow-lg sm:drop-shadow-xl md:drop-shadow-2xl hover:[text-shadow:0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-[1.02] animate-pulse-motion">


         🎬 MovieVerse
      </h1>
     

      <div className="max-w-2xl mx-auto mb-8 sm:mb-12">

        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      </div>

      <div className="flex justify-center mb-8 sm:mb-12">
  <select className="w-32 sm:w-40 p-3 bg-gray-800/80 backdrop-blur-sm text-gray-200 border border-gray-700/50 rounded-xl shadow-lg hover:border-purple-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-200"

          value={type}
          onChange={(e) => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>

      {error && (
        <p className="text-center text-red-400 mt-4 text-lg font-medium">
          {error}
        </p>
      )}

      {!query && (
        <div className="mt-10 px-4">
          <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">

            {defaultMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}

      {query && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 px-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

      
      {query && movies.length > 0 && (
        <div className="flex justify-center pt-8 sm:pt-12">

          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </div>

    </main>
    </>
  );
};

export default SearchPage;
