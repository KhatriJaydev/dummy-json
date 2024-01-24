import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { Product } from 'src/models/common';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchInputSubject: Subject<string> = new Subject<string>();

  getAllProductsList: Product[] = [];
  searchQueryText: string = '';

  pagePerItems: number[] = [30, 60, 100];
  selectedPagePerItem: number = this.pagePerItems[0];
  paginationArray: Array<number> = [];

  currentPage: number = 1;
  subs: Subscription = new Subscription();


  constructor(private apiService: ApiService, private router: Router) {
    this.searchInputSubject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((value: any) => {
        this.resetPageData();
        this.getProducts(this.selectedPagePerItem, this.currentPage, value);
      });
  };

  searchInputData(event: any) {
    this.searchInputSubject.next(event);
  }

  resetPageData() {
    this.currentPage = 1;
  }



  getId(event: any) {
    this.getProducts(this.selectedPagePerItem, this.currentPage, undefined, event);
    this.router.navigate(['product-detail']);
  }

  setPagePerLimit() {
    this.currentPage = 1;
    this.getProducts(this.selectedPagePerItem, this.currentPage);
  }

  goToPreviousPage() {
    this.currentPage--;
    this.getProducts(this.selectedPagePerItem, this.currentPage);
  }

  goToNextPage() {
    this.currentPage++;
    this.getProducts(this.selectedPagePerItem, this.currentPage);

  }

  selectPageNumber(page: number) {
    this.currentPage = page;
    this.getProducts(this.selectedPagePerItem, this.currentPage);
  }


  ngOnInit(): void {
    this.getProducts(this.selectedPagePerItem, this.currentPage);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getProducts(pageSize: number, pageNo: number, searchString?: string, productID?: number) {
    const skip = (pageNo - 1) * pageSize;
    this.apiService.getProducts(pageSize, skip, searchString, productID)
      .subscribe((resp) => {
        if (resp.products) {
          this.paginationArray = [];
          const totalPages = Math.ceil(resp.total / pageSize);
          for (let index = 1; index <= totalPages; index++) {
            this.paginationArray.push(index);
          }
          this.getAllProductsList = resp.products;
        }
        if (productID !== undefined) {
          this.apiService.singleProd.next(resp);
        }
      });
  }
}
