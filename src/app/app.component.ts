import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, catchError, combineLatest, debounceTime, distinctUntilChanged, filter, forkJoin, from, fromEvent, interval, map, mergeMap, multicast, of, pluck, switchMap, take, takeLast, tap, throwError, timer, toArray, withLatestFrom, zip, } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Product } from 'src/models/common';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummy-json';
  // @ViewChild('searchInput') searchInput?: ElementRef;
  // searchInputSubject: Subject<string> = new Subject<string>();

  // getAllProductsList: Product[] = [];
  // searchQueryText: string = '';

  // pagePerItems: number[] = [30, 60, 100];
  // selectedItem: number = this.pagePerItems[0];
  // paginationArray: Array<number> = [];

  // currentPage: number = 1;
  // subs: Subscription = new Subscription();


  // constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  //   // this.subs = this.apiService.getValue().subscribe(value => {
  //   //   console.log(value);
  //   // });

  //   this.searchInputSubject
  //     .pipe(
  //       debounceTime(1000),
  //       distinctUntilChanged()
  //     ).subscribe((value: any) => {
  //       this.resetPageData();
  //       this.getProducts(this.selectedItem, this.currentPage, value);
  //     });
  // };

  // searchInputData(event: any) {
  //   this.searchInputSubject.next(event);
  // }

  // resetPageData() {
  //   this.currentPage = 1;
  // }

  // fetchProducts() {
  //   const itemsPerPage = this.selectedItem;
  //   const currentPageIndex = this.currentPage - 1;
  //   const skip = currentPageIndex * itemsPerPage;

  //   this.subs = this.apiService.getAllProducts(this.selectedItem, skip).subscribe({
  //     next: (response: Product[]) => {
  //       this.getAllProductsList = response;
  //     }
  //   });
  // }

  // getId(event: any) {
  //   this.getProducts(this.selectedItem, this.currentPage, undefined, event);
  //   this.router.navigate(['product-detail']);
  // }

  // setPagePerLimit() {
  //   this.currentPage = 1;
  //   // this.fetchProducts();
  //   this.getProducts(this.selectedItem, this.currentPage - 1);
  // }

  // goToPreviousPage() {
  //   this.currentPage--;
  //   this.fetchProducts();
  // }

  // goToNextPage() {
  //   this.currentPage++;
  //   this.fetchProducts();
  // }

  // selectPageNumber(page: number) {
  //   this.currentPage = page;
  //   this.fetchProducts();
  // }


  // ngOnInit(): void {
  //   this.fetchProducts();
  //   const itemsPerPage = this.selectedItem;
  //   const currentPageIndex = this.currentPage - 1;

  //   this.getProducts(itemsPerPage, currentPageIndex);

  // }

  // ngOnDestroy(): void {
  //   this.subs.unsubscribe();
  // }

  // getProducts(pageSize: number, pageNo: number, searchString?: string, productID?: number) {
  //   const skip = pageNo * (pageSize - 1);
  //   this.apiService.getProducts(pageSize, skip, searchString, productID)
  //     .subscribe((resp) => {
  //       if (resp.products) {
  //         this.paginationArray = [];
  //         const totalPages = Math.ceil(resp.total / pageSize);
  //         for (let index = 1; index <= totalPages; index++) {
  //           this.paginationArray.push(index);
  //         }
  //         this.getAllProductsList = resp.products;
  //       }
  //       if (productID !== undefined) {
  //         this.apiService.singleProd.next(resp);
  //       }
  //     });
  // }

}
