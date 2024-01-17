import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl?: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://dummyjson.com';
  }

  getAllProducts(productLimit: number, skip: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products?limit=${productLimit}&skip=${skip}`);
  }  

  searchProducts(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/search?q=${query}`);
  }
}
