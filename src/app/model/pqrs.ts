import { Cita } from "./cita";
import { Mensaje } from "./mensaje";


export enum EstadoPQRS {
  Pendiente = "Pendiente",
  Diligenciado = "Diligenciado",
  EnProceso = "En Proceso",
  Aprobado = "Aprobado",
  Rechazado = "Rechazado",
  Cerrado = "Cerrado",
}


export class PQRS {
  codigo_pqrs: number;
  fecha_creacion: Date;
  tipo: string;
  motivo: string;
  codigo_cita: Cita;
  codigo_estado: EstadoPQRS;
  mensajeList: Mensaje[];

  constructor(
    codigo_pqrs: number,
    fecha_creacion: Date,
    tipo: string,
    motivo: string,
    codigo_cita: Cita,
    codigo_estado: EstadoPQRS,
    mensajeList: Mensaje[]
  ) {
    this.codigo_pqrs = codigo_pqrs;
    this.fecha_creacion = fecha_creacion;
    this.tipo = tipo;
    this.motivo = motivo;
    this.codigo_cita = codigo_cita;
    this.codigo_estado = codigo_estado;
    this.mensajeList = mensajeList;
  }
}
