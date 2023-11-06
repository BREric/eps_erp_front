import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/model/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private baseURL = "http://localhost:8081/cuentas/login";
  constructor(private httpClient: HttpClient) { }

  login(cuenta: Cuenta):Observable<object>{
    console.log(cuenta);
    return this.httpClient.post(this.baseURL, cuenta);
  }
}
