import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ProductCarouselComponent } from "../../home/home-page/product-carousel/product-carousel.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CardComponent, RouterLink, CommonModule, ProductCarouselComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {
  product: any; // To hold the fetched product details
  products:any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Get the product ID from the route
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the product details using the service
    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = data; // Assign the fetched product data
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        console.log('Fetched data:', data); // Log the fetched data
        this.products = data; // Assuming 'products' is the key in the API response
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
