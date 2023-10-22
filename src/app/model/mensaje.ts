import { Cuenta } from "./cuenta";
import { PQRS } from "./pqrs";


export class Mensaje {
  codigo_mensaje: number;
  fecha_creacion: Date;
  mensaje: string;
  codigo_pqrs: PQRS;
  codigo_cuenta: Cuenta;
  codigoMensaje: Mensaje;

  constructor(
      codigo_mensaje: number,
      fecha_creacion: Date,
      mensaje: string,
      codigo_pqrs: PQRS,
      codigo_cuenta: Cuenta,
      codigoMensaje: Mensaje
  ) {
      this.codigo_mensaje = codigo_mensaje;
      this.fecha_creacion = fecha_creacion;
      this.mensaje = mensaje;
      this.codigo_pqrs = codigo_pqrs;
      this.codigo_cuenta = codigo_cuenta;
      this.codigoMensaje = codigoMensaje;
  }
}

