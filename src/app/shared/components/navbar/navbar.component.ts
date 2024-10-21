import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if using directives like ngClass
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule,FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userForm : FormGroup;
  isFormSubmitted : boolean = false;
  showAlert: boolean = false;

  constructor(){
    this.userForm = new FormGroup({
      fullName: new FormControl("",[Validators.required]),
      email : new FormControl("",[Validators.required, Validators.email]),
      address : new FormControl("",[Validators.required]),
      gender : new FormControl("",[Validators.required, Validators.requiredTrue]),
      phoneNumber : new FormControl("",[Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('[0-9]*')]),
      password : new FormControl("",[Validators.required, Validators.minLength(6)])
    })
  }





  submitApp(){
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted = true;

  //   this.showAlert = true;

  //   setTimeout(() => {
  //     this.showAlert = false;
  //   }, 3000);
  }

}
