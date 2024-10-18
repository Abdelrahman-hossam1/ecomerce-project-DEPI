import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor() {}
  cartProducts: any[] = [];
  total:any = 0
  showAlert: boolean = false;

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal()
  }
  addAmount(index:number){
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  minusAmount(index:number){
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  detectChange(){
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  deletProduct(index:number){
    this.cartProducts.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  clearCart(){
    this.cartProducts = []
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
  getCartTotal(){
    this.total = 0
    for(let x in this.cartProducts){
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }
  alertNow(){

        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 4000);
        this.cartProducts = []
        this.getCartTotal()
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

}
