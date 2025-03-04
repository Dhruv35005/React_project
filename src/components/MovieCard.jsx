import React from "react";

function MovieCard({ movie, toggleWatchlist, watchlist }) {
  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 w-64 transition-transform hover:scale-105 hover:shadow-xl relative">

      <div className="relative">
        <img 
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
          alt={movie.title} 
          className="rounded-md w-full h-80 object-cover"
        />
        

        <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-bold shadow-md">
          ⭐ {movie.vote_average.toFixed(1)}
        </span>
      </div>


      <div className="mt-3 text-center">

        <h2 className="text-lg font-semibold truncate">{movie.title}</h2>

 
        <button
          onClick={() => toggleWatchlist(movie)}
          className={`mt-3 w-full py-2 rounded-md text-sm font-medium transition ${
            isInWatchlist ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
