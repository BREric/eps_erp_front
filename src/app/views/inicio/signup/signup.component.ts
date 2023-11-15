import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  SignupForm!:FormGroup;
  constructor(private formBuilder: FormBuilder){ }
  ngOnInit(): void {

  }

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
