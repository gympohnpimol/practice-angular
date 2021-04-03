import { Component, OnInit, Input } from '@angular/core';
import { Product } from './home';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  products: Product[];

  constructor() { 
    // console.log('[Constructor] - title value = ${this.title}');

    this.products = [];
    this.products.push({name:'a',price:990});
    this.products.push({name:'b',price:1000});
    this.products.push({name:'c',price:500});
  }

  ngOnInit(){}

}
