import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, catchError, throwError } from 'rxjs';
import { Cuenta } from 'src/app/model/cuenta';
import { Paciente } from 'src/app/model/paciente';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private _userType = new BehaviorSubject<'menu-admin' | 'medico' | 'paciente' | 'none'>('none');
  userType = this._userType.asObservable();
  private baseURL = "http://localhost:8081/cuentas/login";

  private signupURL = "http://localhost:8081/paciente/signup";

  constructor(private httpClient: HttpClient) { }

  login(cuenta: Cuenta):Observable<any>{
    console.log(cuenta);
    return this.httpClient.post<any>(this.baseURL, cuenta);
  }

  signup(cuenta: Paciente): Observable<object> {
    return this.httpClient.post<any>(this.signupURL, cuenta)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Signup failed:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );

  }

  setUserType(userType: 'menu-admin' | 'medico' | 'paciente' | 'none') {
    this._userType.next(userType);
  }
}
