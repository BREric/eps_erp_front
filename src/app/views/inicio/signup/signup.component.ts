import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  SignupForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private signupService: CuentaService){ }
    ngOnInit(): void {
      this.SignupForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        cedula: ['', Validators.required],
        telefono: ['', Validators.required],
        codigo_ciudad: ['', Validators.required],
        alergias: ['', Validators.required],
        codigo_eps: ['', Validators.required],
        codigo_tipo_sangre: ['', Validators.required],
        fecha_nacimiento: ['', Validators.required],
        url_foto: [''],
        correo: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      });
    }

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

  signup(): void {
    if (this.SignupForm.valid) {
      const formData = this.SignupForm.value;
      console.log('Form Data:', formData);

      this.signupService.signup(formData).subscribe(
        (response) => {
          console.log('Signup successful:', response);
        },
        (error) => {
          console.error('Signup failed:', error);
        }
      );
    }
  }



  formatDate(date: string): string {
    // Verifica si la fecha es undefined o nula
    if (!date) {
      console.error('Fecha de nacimiento es undefined o nula.');
      return '';
    }

    const formattedDate = new Date(date);

    if (isNaN(formattedDate.getTime())) {
      console.error('Formato de fecha inválido.');
      return '';
    }

    const day = formattedDate.getDate().toString().padStart(2, '0');
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = formattedDate.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
