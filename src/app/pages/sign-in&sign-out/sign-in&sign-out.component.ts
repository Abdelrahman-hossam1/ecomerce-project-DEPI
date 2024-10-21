import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in&sign-out.component.html',
  styleUrls: ['./sign-in&sign-out.component.css']
})
export class SignInComponent {
  isSignInMode = false; 

  toggleMode() {
    this.isSignInMode = !this.isSignInMode;
  }
}
