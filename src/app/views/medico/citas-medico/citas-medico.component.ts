// citas-medico.component.ts
import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita/cita.service';
import { Cita } from 'src/app/model/cita';
@Component({
  selector: 'app-citas-medico',
  templateUrl: './citas-medico.component.html',
  styleUrls: ['./citas-medico.component.scss']
})
export class CitasMedicoComponent implements OnInit {
  citasFuturas: Cita[] = [];

  constructor(private citaService: CitaService) { }

  ngOnInit(): void {
    // Supongamos que el ID del médico es 1 (puedes cambiarlo según tus necesidades)
    const idMedico = 1;

    this.citaService.getCitasFuturasMedico(idMedico).subscribe(
      (data: Cita[]) => {
        console.log(data);
        this.citasFuturas = data;
      },
      (error: any) => {
        console.error('Error al obtener citas futuras:', error);
      }
    );
  }
}
