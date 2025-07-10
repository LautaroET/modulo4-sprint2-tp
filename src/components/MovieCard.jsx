import React from "react";

function MovieCard({ movie, addToWatchlist }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg transition-all duration-300 flex flex-col items-center">
      <img
        src={movie.imagen}
        alt={`imagen de ${movie.name}`}
        className="w-24 h-24 object-cover md:w-32 md:h-60 rounded-lg shadow-md"
      />
      <p className="mt-4 text-lg font-semibold text-blue-300 text-center">
        {movie.name}
      </p>
      <button
        onClick={() => addToWatchlist(movie)}
        className="mt-2 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
      >
        Agregar a Mi Lista
      </button>
    </div>
  );
}

export default MovieCard;





