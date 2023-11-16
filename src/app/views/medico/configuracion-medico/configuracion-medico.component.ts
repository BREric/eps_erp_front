import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion-medico',
  templateUrl: './configuracion-medico.component.html',
  styleUrls: ['./configuracion-medico.component.scss']
})
export class ConfiguracionMedicoComponent {

  profilePicUrl = '/assets/home-doc4k.jpg';

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
