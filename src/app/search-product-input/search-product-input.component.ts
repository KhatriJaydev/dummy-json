import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-product-input',
  templateUrl: './search-product-input.component.html',
  styleUrls: ['./search-product-input.component.scss']
})
export class SearchProductInputComponent {
  @Output() searchProduct = new EventEmitter<string>();

  searchProductInput?: string;

  constructor() { }
  onSearchInputChange(event: any) {
    this.searchProduct.emit(event.target.value || '');
  }
}
