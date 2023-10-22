import { Cita } from "./cita";
import { Usuario } from "./usuario";

enum EPS {
  Sura = "SURA",
  NuevaEps = "NUEVAEPS",
  Sos = "SOS",
  // Agrega más eps aquí
}
enum TipoSangre {
  APositivo = "A+",
  ANegativo = "A-",
  BPositivo = "B+",
  BNegativo = "B-",
  ABPositivo = "AB+",
  ABNegativo = "AB-",
  OPositivo = "O+",
  ONegativo = "O-",
}

export class Paciente extends Usuario{
  fecha_nacimiento:Date;
  alergias:String;
  codigo_eps: EPS;
  codigo_tipo_sangre: TipoSangre;
  citasPaciente:Cita[];

}
