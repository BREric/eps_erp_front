import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiaLibre } from 'src/app/model/diaLibre';

@Injectable({
  providedIn: 'root'
})
export class DiaLibreService {

  private url: string = 'http://localhost:8080/administrador';

  constructor(private http: HttpClient) { }

  listar(){
    this.http.get<DiaLibre[]>(this.url);
  }
}
