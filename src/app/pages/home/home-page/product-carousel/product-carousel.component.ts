import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Fetch all products from the API
  fetchProducts() {
    this.http.get<any>('https://dummyjson.com/c/9443-9cc6-4763-8a9f') // Replace with your actual API
      .subscribe((data) => {
        console.log('Fetched data:', data); // Log the fetched data
        this.allProducts = data; // Assuming 'products' is the key in the API response
        this.products = this.allProducts; // Initially display all products
      }, error => {
        console.error('Error fetching products:', error);
      });
  }
}
