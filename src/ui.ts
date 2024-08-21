import {Estado,partida} from "./model";

export const mostrarMensaje = (estado: Estado) => {
  let mensaje = "";
  switch (estado) {
    case "CONSERVADOR":
      mensaje = `Has sido muy conservador 🤔`;
      break;
    case "CANGUELO":
      mensaje = `Te ha entrado el canguelo eh? 😏`;
      break;
    case "CASI":
      mensaje = `Casi casi... 🥲`;
      break;
    case "CLAVADO":
      mensaje = `¡ Lo has clavado! ¡Enhorabuena! 🎉🎉🎉`;
      break;
    case "PASADO":
      mensaje = `Te has pasado 😬`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.innerHTML = mensaje;
  }
  const resultadoFin = document.getElementById("mensajeFin");
  if (resultadoFin) {
    resultadoFin.innerHTML = `🪦 Partida terminada`;
  }
};

export const gestionarFin = (): void => {
  const btnPedirCarta = document.getElementById("pedirCarta");
  const btnPararPartida = document.getElementById("pararPartida");
  if (
    btnPedirCarta !== null &&
    btnPedirCarta !== undefined &&
    btnPedirCarta instanceof HTMLButtonElement
  ) {
    btnPedirCarta.disabled = true;
  }
  if (
    btnPararPartida !== null &&
    btnPararPartida !== undefined &&
    btnPararPartida instanceof HTMLButtonElement
  ) {
    btnPararPartida.disabled = true;
  }
};

export const muestraCarta = (urlCarta: string): void => {
  const contenedorCartas = document.getElementById("contenedor-cartas");
  const imgCarta = document.createElement("img");
  const carta1 = document.getElementById("carta_boca_abajo");

  if (
    contenedorCartas !== null &&
    contenedorCartas !== undefined &&
    contenedorCartas instanceof HTMLElement
  ) {
    imgCarta.src = urlCarta;
    contenedorCartas.appendChild(imgCarta);
  } else {
    console.error(`No se ha encontrado el elemento con id carta`);
  }
  if (
    carta1 !== null &&
    carta1 !== undefined &&
    carta1 instanceof HTMLImageElement
  ) {
    carta1.style.visibility = "hidden";
    carta1.style.width = "0px";
  }
};

export const muestraPuntuacion = () => {
  const puntuacionItem = document.getElementById("puntuacion");

  if (
    puntuacionItem != null &&
    puntuacionItem !== undefined &&
    puntuacionItem instanceof HTMLInputElement
  ) {
    puntuacionItem.value = partida.puntos.toString();
  } else {
    console.error(`No se ha encontrado el elemento con id puntuacion`);
  }
};

const btnReset = document.getElementById("reset");
if (
  btnReset !== null &&
  btnReset !== undefined &&
  btnReset instanceof HTMLButtonElement
) {
  btnReset.addEventListener("click", () => location.reload());
}

export const iniciarPartida =()=>{
  partida.puntos=0;
  partida.cartasGastadas=[];  
}
