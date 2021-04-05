import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from'./product/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'product';
  @ViewChild('productList', {static: true})
  productList!: ProductListComponent;

  ngOnInit(): void {
    this.productList.products = [     
      {name:'aaa',price:111},     
      {name:'bbb',price:222},     
      {name:'ccc',price:333}   
    ]; 
  }
  constructor() {}
}

