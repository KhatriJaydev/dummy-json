import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, interval, map, of, tap, throwError } from 'rxjs';
import { Product, ProductResponse } from 'src/models/common';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl?: string;

  singleProd = new Subject<any>();

  private dataSubject = new Subject<string>();
  data$ = this.dataSubject.asObservable();

  updateData(data: string) {
    this.dataSubject.next(data);
  }

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://dummyjson.com';
  }

  getProducts(pageSize: number, skip: number, searchQuery?: string, productID?: number): Observable<ProductResponse> {

    let request;

    if (searchQuery !== undefined) {
      request = this.http.get<ProductResponse>(`${this.baseUrl}/products/search?q=${searchQuery}`);
    } else if (productID !== undefined) {
      request = this.http.get<ProductResponse>(`${this.baseUrl}/products/${productID}`);
    } else {
      request = this.http.get<ProductResponse>(`${this.baseUrl}/products?limit=${pageSize}&skip=${skip}`);
    }

    return request;
  }

  getAllProducts(productLimit: number, skip: number): Observable<Product[]> {
    return this.http.get<ProductResponse>(`${this.baseUrl}/products?limit=${productLimit}&skip=${skip}`).pipe(
      map((data: ProductResponse) => {
        const products: Product[] = data.products;
        return products;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<ProductResponse>(`${this.baseUrl}/products/search?q=${query}`).pipe(
      map((data: ProductResponse) => {
        const searchedProducts: Product[] = data.products;
        return searchedProducts;
      })
    );
  }

  // apiUrl = 'https://api.example.com/data';

  // fetchData(): Observable<any> {
  //   return this.http.get(this.apiUrl)
  //     .pipe(
  //       catchError(error => this.handleError(error))
  //     );
  // }

  // handleError(error: any): Observable<never> {
  //   console.error('An error occurred:', error);

  //   return throwError('Something went wrong. Please try again later.');
  // }

  // getValue(): Observable<number> {
  //   console.log(interval(1000))
  //   return interval(1000);
  // }
}
