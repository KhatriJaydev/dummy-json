import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchProductInputComponent } from './search-product-input/search-product-input.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    ProductListComponent,
    SearchProductInputComponent,
    ProductDetailComponent,
    PaginationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
