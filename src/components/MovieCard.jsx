import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="group block w-full">
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 hover:bg-gray-900/95 hover:border-purple-600 hover:shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 h-full">

       
        <div className="relative overflow-hidden rounded-xl mb-4 aspect-[2/3] group-hover:brightness-105">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
            alt={movie.Title}
            onError={(e) => (e.target.src = "/fallback.jpg")}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />

          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-xl" />

          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl -m-1" />
        </div>

       
        <div className="space-y-2">
          <h2 className="font-bold text-white text-lg md:text-xl line-clamp-2 leading-tight group-hover:text-purple-400 transition-colors duration-200">
            {movie.Title}
          </h2>

          <p className="text-gray-400 text-sm font-medium bg-gradient-to-r from-purple-400/40 to-purple-500/40 bg-clip-text">
            {movie.Year}
          </p>
        </div>

       
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-70 transition-opacity duration-500 -m-1 scale-90 group-hover:scale-95" />
      </div>
    </Link>
  );
};

export default MovieCard;
