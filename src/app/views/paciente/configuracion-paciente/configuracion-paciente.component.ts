import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion-paciente',
  templateUrl: './configuracion-paciente.component.html',
  styleUrls: ['./configuracion-paciente.component.scss']
})
export class ConfiguracionPacienteComponent {

  //--modal

  showConfirmationModal = false;

  openConfirmationModal() {
    this.showConfirmationModal = true;
  }

  onConfirmDelete() {
    // Lógica para eliminar la cuenta
    this.showConfirmationModal = false;
  }

  onCancelDelete() {
    this.showConfirmationModal = false;
  }

  //--modal

  profilePicUrl = '/assets/profile-user.jpg';

  onProfilePicClick(event: Event): void {
    const fileInput = document.querySelector('#profile-pic') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        this.profilePicUrl = reader.result as string;
      };
  
      reader.readAsDataURL(file);
    }
  }

}
