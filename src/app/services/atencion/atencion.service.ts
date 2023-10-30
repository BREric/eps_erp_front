import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atencion } from 'src/app/model/atencion';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {

  private url: string = 'http://localhost:8080/atenciones';

  constructor(private http: HttpClient) { }

  listar(){
    this.http.get<Atencion[]>(this.url);
  }
}
