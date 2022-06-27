import React, { useEffect, useReducer } from "react";
import { JuegoReducers } from "../reducers/JuegoReducers";

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
};

export const MisJuegos = () => {
  const [juegos, dispatch] = useReducer(JuegoReducers, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    console.log(juego);
  };

  return (
    <div>
      <h1>Estos son mis VideoJuegos</h1>

      <p>Numero de videojuegos: 15</p>

      <ul>
        <li>Gta</li>
        <li>Gta2</li>
        <li>Gta3</li>
      </ul>

      <h3>Agregar Juego</h3>

      <form onSubmit={conseguirDatosForm}>
        <input type="texto" name="titulo" placeholder="Titulo" />
        <textarea name="descripcion" placeholder="Descripcion" />
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
