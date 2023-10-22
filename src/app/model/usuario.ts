enum Ciudad {
  Ciudad1 = "Armenia",
  Ciudad2 = "Montenegro",
  Ciudad3 = "Circasia",
  // Agrega más valores de enum si es necesario
}

import { Cuenta } from "./cuenta";


export class Usuario extends Cuenta {
  cedula: string;
  nombre: string;
  telefono: number;
  url_foto: string;
  codigo_ciudad: Ciudad;
}
