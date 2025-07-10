import React from "react";
import { pelicula } from "../utils/pelicula"; // Lista de películas
import MovieCard from "./MovieCard";

// Componente que muestra la lista de películas disponibles.
function MovieList({ addToWatchlist }) {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Películas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pelicula.map((movie) => (
            <MovieCard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MovieList;



