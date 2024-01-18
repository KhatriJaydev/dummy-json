import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/common';
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
    return this.http.get<Product[]>(`${this.baseUrl}/products?limit=${productLimit}&skip=${skip}`);
  }  

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/search?q=${query}`);
  }
}
