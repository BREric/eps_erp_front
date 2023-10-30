import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Administrador } from 'src/app/model/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private url: string = 'http://localhost:8080/administradores';

  constructor(private http: HttpClient) { }

  listar(){
    this.http.get<Administrador[]>(this.url);
  }
}
