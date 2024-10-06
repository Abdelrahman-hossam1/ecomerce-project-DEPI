import { Component , Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: any;

  ngOnInit() {
    console.log('Product received:', this.product); // Debug statement
  }
  constructor(private router: Router) {}

  navigateAndReload() {
    const newRoute = `/product-details/${this.product.id}`; // Specify your new route
    this.router.navigateByUrl(newRoute).then(() => {
      // Reload the new route
      window.location.reload();
    });
  }
}
