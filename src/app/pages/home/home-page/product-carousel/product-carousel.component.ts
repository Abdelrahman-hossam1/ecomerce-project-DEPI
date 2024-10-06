import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CardComponent ,RouterLink, CommonModule ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css'
})
export class ProductCarouselComponent {
  allProducts: any[] = []; // All products fetched from the API
  products: any[] = []; // Filtered products to be displayed in the cards

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Fetch all products from the API via the service
  fetchProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        console.log('Fetched data:', data); // Log the fetched data
        this.allProducts = data; // Assuming 'products' is the key in the API response
        this.products = this.allProducts; // Initially display all products
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
