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
  searchQuery: string = ''

  pagePerItems: number[] = [30, 60, 100];
  selectedItem: number = this.pagePerItems[0];

  currentPage: number = 1;
  hideNext = false

  constructor(private apiService: ApiService) { };

  fetchProducts() {
    const skip = (this.currentPage - 1) * this.selectedItem;
    this.apiService.getAllProducts(this.selectedItem, skip).subscribe({
      next: (response: any) => {
        this.getAllProductsList = response.products;
        this.hideNext = false;
      }
    })
  }

  searchProducts() {
    this.apiService.searchProducts(this.searchQuery).subscribe({
      next: (response: any) => {
        this.getAllProductsList = response.products;
        // console.table(this.getAllProductsList);
      }
    });
  }

  setPagePerLimit() {
    this.fetchProducts();
    this.currentPage = 1;
    console.log('Selected Item:', this.selectedItem);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchProducts();
    }
  }

  goToNextPage() {
    if (this.getAllProductsList.length === 0) {
      this.hideNext = true;
    } else {
      this.currentPage++;
    }
    this.fetchProducts();
  }

  selectPageNumber(page: number) {
    this.currentPage = page;
    this.fetchProducts();
  }

  getPaginationArray() {
    const totalPages = Math.ceil(100 / this.selectedItem);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
}
