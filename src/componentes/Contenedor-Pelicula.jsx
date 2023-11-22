import React from "react";
import ArregloPeliculas from "../objetos/Arreglo-Peliculas";
import ElementoPelicula from "./Elemento-Pelicula";
import "../styles/Contenedor-Peliculas.css";

const ContenedorPelicula = () => {
  return (
    <div className="contenedor">
      {ArregloPeliculas.map((pelicula, index) => (
        <ElementoPelicula key={index} {...pelicula} />
      ))}
    </div>
  );
};
export default ContenedorPelicula;
