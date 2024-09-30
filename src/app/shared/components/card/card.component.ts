import { Component , Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: any;
  
  ngOnInit() {
    console.log('Product received:', this.product); // Debug statement
  }
}
