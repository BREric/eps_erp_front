import { Paciente } from "./paciente";
import { Medico } from "./medico";
import { Atencion } from "./atencion";
import { PQRS } from "./pqrs";
import { DetalleCitaMedicamento } from "./detalleCitaMedicamento";

export class Cita {
  codigo_cita: number;
  fecha_creacion: Date;
  fecha_cita: Date;
  motivo: string;
  cedula_paciente: Paciente;
  codigo_medico: Medico;
  codigo_estado: EstadoCita;
  atencion: Atencion;
  pqrsList: PQRS[];
  medicamentosCita: DetalleCitaMedicamento[];

  constructor(
    codigo_cita: number,
    fecha_creacion: Date,
    fecha_cita: Date,
    motivo: string,
    cedula_paciente: Paciente,
    codigo_medico: Medico,
    codigo_estado: EstadoCita,
    atencion: Atencion,
    pqrsList: PQRS[],
    medicamentosCita: DetalleCitaMedicamento[]
  ) {
    this.codigo_cita = codigo_cita;
    this.fecha_creacion = fecha_creacion;
    this.fecha_cita = fecha_cita;
    this.motivo = motivo;
    this.cedula_paciente = cedula_paciente;
    this.codigo_medico = codigo_medico;
    this.codigo_estado = codigo_estado;
    this.atencion = atencion;
    this.pqrsList = pqrsList;
    this.medicamentosCita = medicamentosCita;
  }
}

// Define la enumeración EstadoCita
enum EstadoCita {
  // Define aquí los valores posibles para EstadoCita si es necesario
}
