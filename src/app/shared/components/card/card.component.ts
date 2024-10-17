import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;
  @Output() item = new EventEmitter<{ item: any; quantity: number }>(); // Corrected EventEmitter type

  data: any; // Define data (you can initialize it or use product directly)
  amount: number = 1; // Define and initialize amount (default set to 1)

  constructor(private router: Router) {}

  ngOnInit() {
    this.data = this.product; // Assuming product is assigned to data
    console.log('Product received:', this.product);
  }

  navigateAndReload() {
    const newRoute = `/product-details/${this.product.id}`;
    this.router.navigateByUrl(newRoute).then(() => {
      window.location.reload();
    });
  }

  add() {
    this.item.emit({ item: this.data, quantity: this.amount }); // Emitting the product and quantity
  }
}
