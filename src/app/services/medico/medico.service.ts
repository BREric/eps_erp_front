import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from 'src/app/model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private urlListar: string = 'http://localhost:8081/medico/all';

  private urlRegistrar: string = 'http://localhost:8081/medico/registrar';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Medico[]>(this.urlListar);
  }
  createMedico(medico:Medico){
    return this.http.post<Medico>(this.urlRegistrar,medico);
  }


}
