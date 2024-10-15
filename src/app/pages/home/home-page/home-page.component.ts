import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderCarousselComponent } from './header-caroussel/header-caroussel.component';
import { ProductCarouselComponent } from "./product-carousel/product-carousel.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { AboutUsComponent } from '../../about-us/about-us.component';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, HeaderCarousselComponent, ProductCarouselComponent, ButtonComponent,AboutUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
