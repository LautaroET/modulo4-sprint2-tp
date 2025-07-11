import React from "react";
import { useState, useEffect } from "react"; 
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import MovieList from "./components/MovieList"; 
import WatchlistModal from "./components/WatchlistModal"; 

// Componente principal de la aplicación.
function App() {
  //Cuando inicias la aplicación, intenta cargar la lista guardada:
  // Estado que almacena la lista de películas favoritas (watchlist).
  const [watchlist, setWatchlist] = useState(() => {
    // Inicializa desde localStorage si existe información previa.
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  // Sincroniza la watchlist con localStorage cada vez que cambia.
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Agrega una película a la watchlist, evitando duplicados.
  const addToWatchlist = (movie) => {
    const movieExists = watchlist.some(item => item.id === movie.id);
    if (!movieExists) {
      const updated = [...watchlist, movie];
      setWatchlist(updated); 
      localStorage.setItem("watchlist", JSON.stringify(updated));
    } 
  };

  // Elimina una película por ID de la watchlist.
  const removeFromWatchlist = (id) => { 
    const updatedList = watchlist.filter(movie => movie.id !== id); 
    setWatchlist(updatedList); 
    localStorage.setItem("watchlist", JSON.stringify(updatedList)); 
  };

  // Estado que controla la visibilidad del modal.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Alterna el modal abierto/cerrado.
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Encabezado con botón para abrir el modal */}
      <Header toggleModal={toggleModal} isModalOpen={isModalOpen} />
      
      {/* Lista de películas con botón para agregarlas a la watchlist */}
      <MovieList addToWatchlist={addToWatchlist} />

      {/* Pie de página con créditos */}
      <Footer />
      
      {/* Modal de watchlist visible si isModalOpen es true */}
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          removeFromWatchlist={removeFromWatchlist}
          onClose={toggleModal}
        />
      )}
    </>
  );
}

// Exporta App como componente predeterminado.
export default App;




