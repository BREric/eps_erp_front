import { Medico } from "./medico";

export class DiaLibre {
  codigo_dialibre: number;
  dia: Date;
  codigo_medico: Medico;

  constructor(codigo_dialibre: number, dia: Date, codigo_medico: Medico) {
    this.codigo_dialibre = codigo_dialibre;
    this.dia = dia;
    this.codigo_medico = codigo_medico;
  }
}
