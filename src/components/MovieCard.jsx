import React from "react";
import Button from "./Button";

function MovieCard({ movie, onAdd }) {
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
      <Button onClick={() => onAdd(movie)}>Agregar a Mi Lista</Button>
    </div>
  );
}

export default MovieCard;




