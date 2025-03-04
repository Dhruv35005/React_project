import React from "react";

function WatchList({ watchlist, toggleWatchlist }) {
  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl text-center font-bold mb-5">My Watchlist</h2>

      {watchlist.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {watchlist.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform relative"
            >
              <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title} 
                className="rounded-md w-full"
              />
              <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>

              <button
                onClick={() => toggleWatchlist(movie)}
                className="mt-3 px-4 py-2 text-sm bg-red-500 hover:bg-red-700 rounded-md w-full transition"
              >
                Remove from Watchlist
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg mt-10 opacity-70 animate-pulse">
          Your watchlist is empty. Start adding your favorite movies! 🎬
        </p>
      )}
    </div>
  );
}

export default WatchList;
