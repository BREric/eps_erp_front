import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cuenta } from 'src/app/model/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private _userType = new BehaviorSubject<'menu-admin' | 'medico' | 'paciente' | 'none'>('none');
  userType = this._userType.asObservable();
  private baseURL = "http://localhost:8081/cuentas/login/";

  constructor(private httpClient: HttpClient) { }

  login(cuenta: Cuenta):Observable<object>{
    console.log(cuenta);
    return this.httpClient.post(this.baseURL, cuenta);
  }

  setUserType(userType: 'menu-admin' | 'medico' | 'paciente' | 'none') {
    this._userType.next(userType);
  }
}
