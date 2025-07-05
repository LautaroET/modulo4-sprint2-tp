import React from "react";
import { useState, useEffect } from "react"; 
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import MovieList from "./components/MovieList"; 
import WatchlistModal from "./components/WatchlistModal"; 

// Componente principal de la aplicación.
function App() {
  const [watchlist, setWatchlist] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(()=>{
      const savedWatchlist = localStorage.getItem("watchlist");
      return savedWatchlist ? JSON.parse(localStorage.getItem("watchlist")) : [];
    });
  
    useEffect(() => {
      localStorage.setItem("watchlist",JSON.stringify(watchlist));
    }, [watchlist]);
  
    const addToWatchlist = (movie) => {
      const movieExists = watchlist.some(item => item.id === movie.id);
      if(!movieExists){
        setWatchlist([...watchlist, movie]); 
        localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
      }
    };
  
    const removeFromWatchlist = (id) => { 
      const updatedList = watchlist.filter(movie => movie.id !== id); setWatchlist(updatedList); 
      localStorage.setItem("watchlist", JSON.stringify(updatedList)); 
    };
  
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  return (
    <>
      {/* Encabezado con botón para abrir el modal */}
      <Header toggleModal={toggleModal} isModalOpen={isModalOpen} />
      {/* Lista de películas con opción para agregar a la watchlist */}
      <MovieList addToWatchlist={addToWatchlist} />
      {/* Pie de página interactivo */}
      <Footer />
      
      {/* Modal que muestra la watchlist si está abierto */}
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



