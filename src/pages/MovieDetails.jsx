import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/omdbApi";

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

 
  const backLink = location.state?.from || "/";

  useEffect(() => {
    getMovieDetails(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie)
    return <p className="text-center text-white text-xl mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">


  
      <div className="absolute inset-0 opacity-30 blur-3xl">
        {movie.Poster && movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            className="w-full h-full object-cover"
            alt="bg"
          />
        ) : null}
      </div>

      <div className="relative max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 z-10">
      <Link
        to={backLink}
        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:from-purple-700 hover:to-purple-900 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-purple-500/50 backdrop-blur-sm mb-6 sm:mb-8">
      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back to Search
</Link>



        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-gray-900/50 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl">


          
          <div className="w-48 sm:w-56 md:w-64 lg:w-80 flex-shrink-0 mx-auto lg:mx-0">

            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "/fallback-image.png" 
              }
              alt={movie.Title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

         
          <div className="flex-1">
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{movie.Title}</h1>


            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-2 sm:mb-3 flex flex-wrap items-center gap-1 sm:gap-2">

              ⭐ {movie.imdbRating}  
              &nbsp; | &nbsp; {movie.Year}
              &nbsp; | &nbsp; {movie.Runtime}
            </p>

            <p className="text-gray-300 mb-3">
              <strong>Genre:</strong> {movie.Genre}
            </p>

            <p className="text-gray-300 mb-3">
              <strong>Actors:</strong> {movie.Actors}
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              {movie.Plot}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieDetails;
