import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AdministradorService } from './services/administrador/administrador.service';
import { AtencionService } from './services/atencion/atencion.service';
import { CitaService } from './services/cita/cita.service';
import { DiaLibreService } from './services/dia_libre/dia-libre.service';
import { HorarioService } from './services/horario/horario.service';
import { MedicamentoService } from './services/medicamento/medicamento.service';
import { MedicoService } from './services/medico/medico.service';
import { MensajeService } from './services/mensaje/mensaje.service';
import { PacienteService } from './services/paciente/paciente.service';
import { PqrsService } from './services/pqrs/pqrs.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eps_erp';
  epsForm: FormGroup;
  loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public administradorService:AdministradorService,
    public atencionService:AtencionService,
    public citaService:CitaService,
    public ciaLibreService:DiaLibreService,
    public horarioService:HorarioService,
    public medicamentoService:MedicamentoService,
    public medicoService:MedicoService,
    public mensajeService:MensajeService,
    public pacienteService:PacienteService,
    public pqrsService:PqrsService
  ){

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
}
