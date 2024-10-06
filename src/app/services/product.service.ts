import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/c/35f0-9341-4bdf-87fe';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Method to get a single product by ID
  getProductById(id: number): Observable<any> {
    return this.getAllProducts().pipe(
      map((products) => products.find((product) => product.id === id)), // Filter the product by ID
      catchError((error) => {
        console.error('Error fetching product by ID:', error);
        return of(null); // Return null if not found
      })
    );
  }

  // Method to get all products (optional if needed)
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
