import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, interval, map, of, tap } from 'rxjs';
import { Product, ProductResponse } from 'src/models/common';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl?: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://dummyjson.com';
  }

  getAllProducts(productLimit: number, skip: number): Observable<Product[]> {
    return this.http.get<ProductResponse>(`${this.baseUrl}/products?limit=${productLimit}&skip=${skip}`).pipe(
      map((data: ProductResponse) => {
        const products: Product[] = data.products;
        return products
      }),
      catchError((error) => {
        return of(error)
      })
    );
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/search?q=${query}`);
  }

  // getValue(): Observable<number> {
  //   console.log(interval(1000))
  //   return interval(1000);
  // }
}
