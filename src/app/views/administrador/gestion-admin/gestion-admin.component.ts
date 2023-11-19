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
  medicoForm!: FormGroup;
  profilePicUrl = '/assets/profile-user.jpg';

  onProfilePicClick(event: Event): void {
    const fileInput = document.querySelector('#profile-pic') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.profilePicUrl = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }





  medicos:Medico[];
  medico:Medico = new Medico;

constructor(private service:MedicoService, private router: Router,private fb:FormBuilder,private httpClient: HttpClient){

}

  ngOnInit(): void {

    this.medicoForm = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
      codigo_especialidad: ['', Validators.required],
      cedula: ['', Validators.required],
      codigo_ciudad: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      url_foto: ['']
  });



    this.service.listar()
    .subscribe(data => {
      this.medicos = data;

    });
  }

  Guardar(): void {

    console.log('Entrando en la función Guardar');
    console.log(this.medicoForm.errors);
    if (this.medicoForm.valid) {
      const medicoData = this.medicoForm.value;
      console.log('Form Data:', medicoData);

      this.service.createMedico(medicoData)
        .subscribe(
          (response) => {
            console.log('Signup successful:', response);
            location.reload();
          },
          (error) => {
            console.error('Signup failed:', error);
          }
        );
    } else {
      console.log('Formulario inválido. No se ejecutará la solicitud.');
    }



  }

}
