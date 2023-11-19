import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private baseUrl = 'http://localhost:8081/cita/registrarCita';

  private baseMedicoUrl = 'http://localhost:8081/cita';

  constructor(private httpClient: HttpClient) { }

  registrarCita(cita: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let body = new HttpParams();
    body = body.set('especializacion', cita.especializacion);
    body = body.set('fecha_cita', cita.fecha_cita);
    body = body.set('motivo', cita.motivo);

    return this.httpClient.post<any>(this.baseUrl, body, { headers: headers });
  }

  getCitasFuturasMedico(idMedico: number): Observable<Cita[]> {
    const url = `${this.baseMedicoUrl}/${idMedico}/citas-futuras`;
    return this.httpClient.get<Cita[]>(url);
  }

  listar() {
    return this.httpClient.get<Cita[]>(this.baseUrl);
  }
}
