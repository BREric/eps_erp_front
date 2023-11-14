import { ChangeDetectorRef, Component } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private cuentaService: CuentaService) {}

  logAsAdmin() {
    this.cuentaService.setUserType('menu-admin');
  }

  logAsMedico() {
    this.cuentaService.setUserType('medico');
  }

  logAsPaciente() {
    this.cuentaService.setUserType('paciente');
  }
}
