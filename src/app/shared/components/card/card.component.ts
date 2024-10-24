import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product: any;
  @Output() item = new EventEmitter<{ item: any; quantity: number }>();

  data: any;
  amount: number = 1;
  showAlert: boolean = false; // For controlling the alert display

  constructor(private router: Router) {}

  ngOnInit() {
    this.data = this.product; // Assuming product is assigned to data
    console.log('Product received:', this.product);
  }

  navigateAndReload() {
    const newRoute = `/product-details/${this.product.id}`;
    this.router.navigateByUrl(newRoute).then(() => {
      // window.location.reload();
    });
  }

  add(event: Event) {
    event.preventDefault(); // Prevent page reload
    this.item.emit({ item: this.data, quantity: this.amount }); // Emitting the product and quantity

    // Show the success alert
    this.showAlert = true;

    // Hide the alert after 3 seconds
    setTimeout(() => {
      this.showAlert = false;
    }, 1000);
  }
}
