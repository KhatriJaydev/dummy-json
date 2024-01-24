import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  singalProdctDetail: any;
  productDetailSub: Subscription = new Subscription();
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.productDetailSub = this.apiService.singleProd.subscribe(value => {
      this.singalProdctDetail = value;
    });
  }

  ngOnDestroy(): void {
    this.productDetailSub.unsubscribe();
  }
}

