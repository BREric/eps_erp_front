import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from 'src/app/model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private url: string = 'http://localhost:8080/medico';

  constructor(private http: HttpClient) { }

  listar(){
    this.http.get<Medico[]>(this.url);
  }
}
