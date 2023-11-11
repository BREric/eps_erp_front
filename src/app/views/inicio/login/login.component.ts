import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cuenta } from 'src/app/model/cuenta';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cuentaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private cuentaservice: CuentaService

  ) {
    this.cuentaForm = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  public login(): void {
    const cuentaData = this.cuentaForm.value;
    console.log(cuentaData);

    this.cuentaservice.login(this.cuentaForm.value).subscribe(data=>{
      alert("Login correcto");
    }, error=>alert("Login incorrecto"));



    // Aquí puedes enviar cuentaData al servidor para el inicio de sesión.
  }
}