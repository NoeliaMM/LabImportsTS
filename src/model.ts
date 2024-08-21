interface Partida {
  puntos:number,
  cartasGastadas: Array<number>
}
export const partida:Partida = {
  puntos:0,
  cartasGastadas:[]
}

export const min: number = 1;
export const max: number = 12;


export type Estado =
  | "CONSERVADOR"
  | "CANGUELO"
  | "CASI"
  | "CLAVADO"
  | "PASADO"
  | "GAME_OVER";

