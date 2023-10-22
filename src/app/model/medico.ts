import { Usuario } from "./usuario";
import { Cita } from "./cita";
import { DiaLibre } from "./diaLibre";
import { Horario } from "./horario";

enum Ciudad {
  Bogota = "Bogotá",
  Medellin = "Medellín",
  Cali = "Cali",
  // Agrega más ciudades aquí
}

// Enumeración Especialidad
enum Especialidad {
  Pediatria = "Pediatría",
  Cirugia = "Cirugía",
  MedicinaGeneral = "Medicina General",
  // Agrega más especialidades aquí
}

export class Medico extends Usuario {
  codigo_especialidad: Especialidad; // Tipo de dato enum Especialidad
  citaMedicoList: Cita[];
  dia_libreList: DiaLibre[];
  horarioList: Horario[];

  /**
  constructor(
    cedula: string,
    nombre: string,
    telefono: number,
    url_foto: string,
    codigo_ciudad: Ciudad, // Tipo de dato enum Ciudad
    codigo_especialidad: Especialidad, // Tipo de dato enum Especialidad
    citaMedicoList: Cita[],
    dia_libreList: DiaLibre[],
    horarioList: Horario[],
    mensajes: Mensaje[]
  ) {
    super(cedula, nombre, telefono, url_foto, codigo_ciudad);
    this.codigo_especialidad = codigo_especialidad;
    this.citaMedicoList = citaMedicoList;
    this.dia_libreList = dia_libreList;
    this.horarioList = horarioList;
    this.mensajes = mensajes;
  }
  */
}
