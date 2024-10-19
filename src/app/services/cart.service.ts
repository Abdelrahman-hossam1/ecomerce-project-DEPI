import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private items: any[]= [];
  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
    console.log('Product added to cart:', product);
  }
}
