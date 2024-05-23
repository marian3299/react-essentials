import { useState } from "react";
import "./Libro.css";
//import styled from "styled-components";

export default function Libro({ libro }) {
  /* const Titulo = styled.h2`
    display: block;
    padding: 0;
    margin: 0;
    flex-basis: 100%;
  `; */

  const [miClase, setMiClase] = useState('default');

  return (
    <>
      {/* <div className="item">
        <Titulo>{libro.titulo}</Titulo>
        <span>Publicado en {libro.publicado}</span>
      </div> */}

      {/* Traido de bootstrap */}
      <div className={"card col-md-3 " + miClase}>
        <div className="card-body">
          <h5 className="card-title">{libro.titulo}</h5>
          <p className="card-text">Publicado en {libro.publicado}</p>
          <button className="btn btn-primary" onClick={ () => {setMiClase('seleccionado')} }>Seleccionar</button>
        </div>
      </div>
      
    </>
  );
}
