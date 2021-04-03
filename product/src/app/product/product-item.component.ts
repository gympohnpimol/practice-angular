import { Output } from '@angular/core';
import { Component, OnInit, Input, EventEmitter } from'@angular/core';
// import * as EventEmitter from 'node:events';
import { Product } from'./product';

@Component({
    selector:'app-product-item',
    templateUrl:'./product-item.component.html',
    styleUrls: ['./product-item.component.css']})
export class ProductItemComponent implements OnInit { 
    @Input()
    products: Product | undefined;

    @Output()
    OnSelected: EventEmitter<Product> = new EventEmitter();
    constructor() {

    }
    ngOnInit() {

    }
    select() {
        this.OnSelected.emit(this.products); 
    }
}
