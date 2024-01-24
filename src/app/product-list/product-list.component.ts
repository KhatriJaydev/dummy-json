import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/models/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() productList: Product[] = [];
  @Output() productId = new EventEmitter<number>();

  openProductDetail(getProductId: number) {
    this.productId.emit(getProductId);
  }
}
