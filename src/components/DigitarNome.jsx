import React, { Component } from "react";
import MostrarNome from "./MostrarNome"

export default class DigitarNome extends Component {
  render() {
    return (
      <>
      <div className="enviar">
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome:"/>
        <button type="submit" id="button">Enviar</button>
        </div>

        <div className="mostrarnome">
        <MostrarNome />
        </div>
      </>
    );
  }
}