import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicamento } from 'src/app/model/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private url: string = 'http://localhost:8080/administrador';

  constructor(private http: HttpClient) { }

  listar(){
    this.http.get<Medicamento[]>(this.url);
  }
}
