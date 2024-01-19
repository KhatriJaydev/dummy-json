import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map } from 'rxjs';
import { Product } from 'src/models/common';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('searchInput') searchInput?: ElementRef;
  title = 'dummy-json';
  getAllProductsList: Product[] = [];
  searchQueryText: string = ''

  pagePerItems: number[] = [30, 60, 100];
  selectedItem: number = this.pagePerItems[0];

  currentPage: number = 1;
  subs: Subscription = new Subscription();

  constructor(private apiService: ApiService) {
    // this.subs = this.apiService.getValue().subscribe(value => {
    //   console.log(value);
    // });
  };

  fetchProducts() {
    const itemsPerPage = this.selectedItem;
    const currentPageIndex = this.currentPage - 1;
    const skip = currentPageIndex * itemsPerPage;

    this.subs = this.apiService.getAllProducts(this.selectedItem, skip).subscribe({
      next: (response: Product[]) => {
        this.getAllProductsList = response
      }
    })
  }

  setPagePerLimit() {
    this.currentPage = 1;
    this.fetchProducts();
  }

  goToPreviousPage() {
    this.currentPage--;
    this.fetchProducts();
  }

  goToNextPage() {
    this.currentPage++;
    this.fetchProducts();
  }

  selectPageNumber(page: number) {
    this.currentPage = page;
    this.fetchProducts();
  }

  getPaginationArray() {
    const totalPages = Math.ceil(100 / this.selectedItem);
    const paginationArray = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationArray.push(i);
    }

    return paginationArray;
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
    const searchTerm = fromEvent(this.searchInput?.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(1000)
    )

    searchTerm.subscribe(res => {
      this.apiService.searchProducts(res).subscribe({
        next: (response: Product[]) => {
          this.getAllProductsList = response;
        }
      })
      console.log(res);
    })
  }
}
