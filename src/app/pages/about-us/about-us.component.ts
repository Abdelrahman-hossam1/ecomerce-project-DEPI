import { Component } from '@angular/core';
import { AboutUsCarousselComponent } from "./about-us-caroussel/about-us-caroussel.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsCarousselComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
