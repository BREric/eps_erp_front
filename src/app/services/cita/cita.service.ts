import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from 'src/app/model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private url: string = 'http://localhost:8080/cita';

  constructor(private http: HttpClient) { }

  listar(){
    this.http.get<Cita[]>(this.url);
  }
}
