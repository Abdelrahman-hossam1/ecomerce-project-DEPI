import { Component, OnInit  } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CardComponent,RouterLink,CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})


export class ProductsPageComponent implements OnInit {
  allProducts: any[] = []; // All products fetched from the API
  products: any[] = []; // Filtered products to be displayed in the cards

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Fetch all products from the API
  fetchProducts() {
    this.http.get<any>('https://dummyjson.com/c/0d38-64b9-481b-9d5d') // Replace with your actual API
      .subscribe((data) => {
        console.log('Fetched data:', data); // Log the fetched data
        this.allProducts = data; // Assuming 'products' is the key in the API response
        this.products = this.allProducts; // Initially display all products
      }, error => {
        console.error('Error fetching products:', error);
      });
  }

  // Filter products by category (men, women, kids)
  filterProductsByCategory(category: string) {
    this.products = this.allProducts.filter(product => product.category === category);
  }

  // Methods to show different categories
  showMenProducts() {
    this.filterProductsByCategory('men');
  }

  showWomenProducts() {
    this.filterProductsByCategory('women');
  }

  showKidsProducts() {
    this.filterProductsByCategory('kids');
  }

  // Method to reset and show all products
  showAllProducts() {
    this.products = this.allProducts;
  }
}
