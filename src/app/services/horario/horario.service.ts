import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horario } from 'src/app/model/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private url: string = 'http://localhost:8080/administrador';

  constructor(private http: HttpClient) { }

  listar(){
    this.http.get<Horario[]>(this.url);
  }
}
