import { Mensaje } from "./mensaje";


export class Cuenta {
  correo: String;
  password: String;
  codigo_cuenta: number;
  mensajes: Mensaje[];
}