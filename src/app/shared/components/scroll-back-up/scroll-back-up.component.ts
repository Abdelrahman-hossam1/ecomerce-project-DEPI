import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scroll-back-up',
  standalone: true,
  templateUrl: './scroll-back-up.component.html',
  styleUrls: ['./scroll-back-up.component.css']
})
export class ScrollBackUpComponent implements AfterViewInit {
  @ViewChild('myBtn') mybutton!: ElementRef;

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollFunction();
  }

  // Lifecycle hook to ensure the button is accessible after view initialization
  ngAfterViewInit() {
    this.scrollFunction(); // Call to update the button visibility on load if needed
  }

  // Method to control button visibility
  scrollFunction() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Show the button when scrolled more than 20px from the top
    if (scrollTop > 20) {
      this.mybutton.nativeElement.style.display = 'block';
    } else {
      this.mybutton.nativeElement.style.display = 'none';
    }
  }

  // Scroll to top function
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
