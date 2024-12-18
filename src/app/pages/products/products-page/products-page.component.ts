import { Component, OnInit  } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { LoaderComponent } from "../../../shared/components/loader/loader.component";


@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CardComponent, RouterLink, CommonModule, LoaderComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})


export class ProductsPageComponent implements OnInit {
  allProducts: any[] = []; // All products fetched from the API
  products: any[] = []; // Filtered products to be displayed in the cards
  cartProducts:any[] = [];
 

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
  addToCart(event:any){
    if("cart" in localStorage ){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.id == event.id)
      if(true){
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }
}
// addToCart(event:any){
//   if("cart" in localStorage ){
//     this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
//     let exist = this.cartProducts.find(item => item.id == event.id)
//     if(exist){
//       alert("product already exist in the cart")
//     }else{
//       this.cartProducts.push(event)
//       localStorage.setItem("cart", JSON.stringify(this.cartProducts))
//     }
//   }else{
//     this.cartProducts.push(event)
//     localStorage.setItem("cart", JSON.stringify(this.cartProducts))
//   }
// }
