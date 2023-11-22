import React from "react";
import "../styles/Elemento-Pelicula.css";

const ElementoPelicula = ({
  imagen,
  alt,
  titulo,
  genero,
  sinopsis,
  duracion,
  year,
  trailer,
}) => {
  function reproducirVideo() {
    var videoFrame = document.getElementById("videoFrame");
    videoFrame.src = videoFrame.src.replace("autoplay=0", "autoplay=1");
  }

  return (
    <div className="div-elemento" onClick={reproducirVideo}>
      <div className="boton-play">▶</div>
      <iframe
        className="video-embed"
        id="videoFrame"
        width="560"
        height="315"
        src={trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="elemento-portada">
        <img
          className="imagen-elemento"
          src={require(`../imagenes/${imagen}.jpg`)}
          alt={alt}
        />
      </div>
      <div className="texto-elemento">
        <div>
          <h1 className="titulo-elemento">{titulo}</h1>
          <p className="year-elemento">{year}</p>
          <h2 className="genero-elemento">{genero}</h2>
          <p className="sinopsis-elemento">{sinopsis}</p>
        </div>
        <p className="duracion-elemento">{duracion}</p>
      </div>
    </div>
  );
};

export default ElementoPelicula;
