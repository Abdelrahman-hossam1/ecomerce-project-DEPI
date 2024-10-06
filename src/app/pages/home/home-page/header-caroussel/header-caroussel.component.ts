import { Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-caroussel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-caroussel.component.html',
  styleUrl: './header-caroussel.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderCarousselComponent {

}
