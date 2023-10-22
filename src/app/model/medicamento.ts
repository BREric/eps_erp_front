import { DetalleCitaMedicamento } from "./detalleCitaMedicamento";

export class Medicamento {
  codigo_medicamento: number;
  nombre: string;
  vencimiento: Date;
  cantidad: number;
  medicamentosCita: DetalleCitaMedicamento[];

  constructor(codigo_medicamento: number, nombre: string, vencimiento: Date, cantidad: number, medicamentosCita: DetalleCitaMedicamento[]) {
    this.codigo_medicamento = codigo_medicamento;
    this.nombre = nombre;
    this.vencimiento = vencimiento;
    this.cantidad = cantidad;
    this.medicamentosCita = medicamentosCita;
  }
}
