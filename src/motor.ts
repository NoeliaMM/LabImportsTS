import {partida} from "./model";
import {mostrarMensaje,gestionarFin,muestraCarta,muestraPuntuacion} from "./ui";

export const finalizarPartida = () => {
  if (partida.puntos === 7.5) {
    mostrarMensaje("CLAVADO");
  }

  if (partida.puntos > 7.5) {
    mostrarMensaje("PASADO");
  }

  gestionarFin();
};

export const comprobarPuntuacion = (): void => {
  if (partida.puntos === 7.5) {
    mostrarMensaje("CLAVADO");
  }
  if (partida.puntos <= 4) {
    mostrarMensaje("CONSERVADOR");
  }
  if (partida.puntos > 4 && partida.puntos <= 5) {
    mostrarMensaje("CANGUELO");
  }
  if (partida.puntos > 5 && partida.puntos <= 7.5) {
    mostrarMensaje("CASI");
  }
  if (partida.puntos > 7.5) {
    mostrarMensaje("PASADO");
  }

  gestionarFin();
};

const calcularNumeroCarta = () => {
 const numeroAleatorio= Math.floor(Math.random() * 10) + 1;
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

const obtenerUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const obtenerPuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

const sumarPuntos = (puntuacion: number) => {
  return partida.puntos + puntuacion;
};

const actualizarPuntos = (puntosActuales: number) => {
  partida.puntos = puntosActuales;
};

export const dameCarta = (): void => {
  const carta = calcularNumeroCarta();
  if(partida.cartasGastadas.includes(carta)){
    dameCarta();
  }else{
    partida.cartasGastadas.push(carta);    
    const urlCarta = obtenerUrlCarta(carta);
    muestraCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntos(puntosSumados);
    muestraPuntuacion();
    if (partida.puntos >= 7.5) {
      finalizarPartida();
    }
  }
};

