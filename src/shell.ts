import { iniciarPartida,comprobarPuntuacion, dameCarta } from "./ui";

document.addEventListener("DOMContentLoaded", iniciarPartida);

const btnPedirCarta = document.getElementById("pedirCarta");
if (
  btnPedirCarta !== null &&
  btnPedirCarta !== undefined &&
  btnPedirCarta instanceof HTMLButtonElement
) {
  btnPedirCarta.addEventListener("click", dameCarta);
}

const btnPararPartida = document.getElementById("pararPartida");
if (
  btnPararPartida !== null &&
  btnPararPartida !== undefined &&
  btnPararPartida instanceof HTMLButtonElement
) {
  btnPararPartida.addEventListener("click", comprobarPuntuacion);
}