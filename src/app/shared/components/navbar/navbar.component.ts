import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if using directives like ngClass
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


}
