
function WatchlistModal({ watchlist, removeFromWatchlist, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-blue-400">Mi Watchlist</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
        {watchlist.length === 0 ? (
          <p className="text-gray-300">No hay películas en tu watchlist aún.</p>
        ) : (
          <ul className="space-y-4">
            {watchlist.map((movie) => (
              <li
                key={movie.id}
                className="flex items-center justify-between bg-gray-700 p-3 rounded-md shadow-sm"
              >
                <div className="flex items-center">
                  <img
                    src={movie.imagen}
                    alt={movie.name}
                    className="w-12 h-12 object-cover rounded-md mr-4"
                  />
                  <span className="text-white text-lg font-medium">
                    {movie.name}
                  </span>
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
};

export default WatchlistModal;