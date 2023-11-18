import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion-admin',
  templateUrl: './configuracion-admin.component.html',
  styleUrls: ['./configuracion-admin.component.scss']
})
export class ConfiguracionAdminComponent {

  profilePicUrl = '/assets/Healh-horizon.png';

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
