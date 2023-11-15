import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() showModal: boolean = false;
  @Input() details: any; // Puedes pasar los detalles desde el componente padre

  close() {
    this.showModal = false;
  }

}
