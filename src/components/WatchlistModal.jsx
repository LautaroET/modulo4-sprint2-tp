import React from "react";

// Modal que muestra las películas en la watchlist.
function WatchlistModal({ watchlist, removeFromWatchlist, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-blue-400">Mi Watchlist</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </button>
        </div>
        {/* Lista de películas en la watchlist */}
        {watchlist.length === 0 ? (
          <p className="text-gray-300">No hay películas en tu watchlist aún.</p>
        ) : (
          <ul className="space-y-4">
            {watchlist.map((movie) => ( 
              <li key={movie.id} className="flex items-center justify-between bg-gray-700 p-3 rounded-md shadow-sm">
                <div className="flex items-center">
                  <img src={movie.imagen} alt={movie.name} className="w-12 h-12 object-cover rounded-md mr-4" />
                  <span className="text-white text-lg font-medium">{movie.name}</span>
                </div>
                <button
                  onClick={() => removeFromWatchlist(movie.id)}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded transition duration-300"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WatchlistModal;
