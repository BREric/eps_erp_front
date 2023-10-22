import { Cita } from "./cita";
import { Medicamento } from "./medicamento";

export class DetalleCitaMedicamento {
  cita: Cita;
  medicamento: Medicamento;

  constructor(cita: Cita, medicamento: Medicamento) {
    this.cita = cita;
    this.medicamento = medicamento;
  }
}

