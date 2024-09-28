import { Component } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css'
})
export class ProductCarouselComponent {

}
