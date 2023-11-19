import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError, forkJoin } from 'rxjs';
import { Cuenta } from 'src/app/model/cuenta';


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
    private cuentaservice: CuentaService,
    private router: Router
  ) {
    this.cuentaForm = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

  /**
  public login(): void {
    const cuentaData = this.cuentaForm.value;
    console.log(cuentaData);

    this.cuentaservice.loginAdministrador(cuentaData).pipe(
      catchError(error => this.cuentaservice.loginMedico(cuentaData).pipe(
        catchError(error => this.cuentaservice.loginPaciente(cuentaData)),
          catchError(error => {
            console.error('Login failed:', error);
            return throwError('Error logging in.');
          })

      )

      ),

    ).subscribe(
        (data) => {

          this.router.navigate(['/administrador']);
        },
        (error) => {

          console.error('Login failed:', error);

        }
      );
  }
*/

public login(): void {
  const cuentaData = this.cuentaForm.value;
  console.log(cuentaData);

  this.cuentaservice.login(cuentaData).subscribe(
    (data) => {

      console.log(data.userType);
      if(data.userType === "administrador"){
        this.router.navigate(['/administrador']);
      } else if(data.userType === "medico"){
        this.router.navigate(['/medico']);
      } else if(data.userType === "paciente"){
        this.router.navigate(['/paciente']);
      }
    },
    (error) => {
      console.error('Login failed:', error);
      return throwError('Error logging in.');
    });
}

}