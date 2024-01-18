import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dummy-json';
  getAllProductsList: any = [];
  searchQueryText: string = ''

  pagePerItems: number[] = [30, 60, 100];
  selectedItem: number = this.pagePerItems[0];

  currentPage: number = 1;

  constructor(private apiService: ApiService) { };

  fetchProducts() {
    const itemsPerPage = this.selectedItem;
    const currentPageIndex = this.currentPage - 1;
    const skip = currentPageIndex * itemsPerPage;

    this.apiService.getAllProducts(this.selectedItem, skip).subscribe({
      next: (response: any) => {
        this.getAllProductsList = response.products;
      }
    })
  }

  searchProductsInput() {
    this.apiService.searchProducts(this.searchQueryText).subscribe({
      next: (response: any) => {
        this.getAllProductsList = response.products;
      }
    });
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
}
