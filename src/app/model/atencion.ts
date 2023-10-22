import { Cita } from "./cita";

export class Atencion {
  codigo_atencion: number;
  diagnostico: string;
  tratamiento: string;
  notas_medicas: string;
  codigo_cita: Cita;

  constructor(
    codigo_atencion: number,
    diagnostico: string,
    tratamiento: string,
    notas_medicas: string,
    codigo_cita: Cita
  ) {
    this.codigo_atencion = codigo_atencion;
    this.diagnostico = diagnostico;
    this.tratamiento = tratamiento;
    this.notas_medicas = notas_medicas;
    this.codigo_cita = codigo_cita;
  }
}
