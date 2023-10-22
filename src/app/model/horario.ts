import { Medico } from "./medico";

export class Horario {
  codigo_horario: number;
  dia: Date;
  hora_inicio: Date;
  hora_fin: Date;
  codigo_medico: Medico;

  constructor(codigo_horario: number, dia: Date, hora_inicio: Date, hora_fin: Date, codigo_medico: Medico) {
    this.codigo_horario = codigo_horario;
    this.dia = dia;
    this.hora_inicio = hora_inicio;
    this.hora_fin = hora_fin;
    this.codigo_medico = codigo_medico;
  }
}
