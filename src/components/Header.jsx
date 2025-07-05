import React from "react";

// Encabezado de la aplicación con logo y botón para ver la watchlist.
function Header({ toggleModal, isModalOpen }) {
  return (
    <header className="w-full bg-blue-950 shadow-lg relative">
      <div className="flex justify-between items-center px-4 py-3 sm:px-12">
        {/* Logo + Título */}
        <div className="flex items-center gap-3">
          <img
            src={"/src/assets/img/palomitas-de-maiz.png"}
            alt="Logo de Watchlist"
            className="w-16 h-16 object-contain"
          />
          <p className="text-white text-2xl font-extrabold tracking-wide">
            Watcht <span className="text-sky-300">List</span>
          </p>
        </div>

        {/* Botón para abrir/cerrar el modal */}
        <button
          className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 flex items-center cursor-pointer"
          onClick={toggleModal}
          aria-label="Abrir menú de navegación"
        >
          <p className="m-2">My Watch List</p>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isModalOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;


