import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from 'src/app/model/medico';
import { MedicoService } from 'src/app/services/medico/medico.service';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.scss']
})
export class GestionAdminComponent implements OnInit{


  medicoForm: FormGroup = new FormGroup({
    codigo_cuenta: new FormControl(''),
    correo: new FormControl(''),
    password: new FormControl(''),
    codigo_especialidad: new FormControl(''),
    cedula: new FormControl(''),
    codigo_ciudad: new FormControl(''),
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    url_foto: new FormControl('')
  }) ;
  medicos:Medico[];
  medico:Medico = new Medico;

constructor(private service:MedicoService, private router: Router,private fb:FormBuilder,private httpClient: HttpClient){
  this.medicoForm = this.fb.group({
    codigo_cuenta: ['', Validators.required],
    correo: ['', Validators.required],
    password: ['', Validators.required],
    codigo_especialidad: ['', Validators.required],
    cedula: ['', Validators.required],
    codigo_ciudad: ['', Validators.required],
    nombre: ['', Validators.required],
    telefono: ['', Validators.required],
    url_foto: ['', Validators.required]
});
}

  ngOnInit() {

    this.service.listar()
    .subscribe(data => {
      this.medicos = data;

    });
  }

  Guardar():void {

  const medicoData = this.medicoForm.value;
  // Crea un objeto de tipo Medico y asigna los valores del formulario
  const nuevoMedico: Medico = {
    codigo_cuenta: medicoData.codigo_cuenta,
    correo: medicoData.correo,
    password: medicoData.password,
    codigo_especialidad: medicoData.codigo_especialidad,
    cedula: medicoData.cedula,
    codigo_ciudad: medicoData.codigo_ciudad,
    nombre: medicoData.nombre,
    telefono: medicoData.telefono,
    url_foto: medicoData.url_foto,
  };
  console.log(nuevoMedico)
  this.service.createMedico(nuevoMedico)
  .subscribe(
    (data: Medico) => {
      alert("Se agregó con éxito: " + data.nombre);
      // Optionally, you can navigate to a different route or perform other actions.
    },
    (error) => {
      // Log the detailed error message from the server
      console.error('Error en la solicitud:', error.error);
    }
  );




  }
}
