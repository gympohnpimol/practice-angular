import { Component, OnInit } from'@angular/core';
import { Product } from'./product';
@Component({
    selector:'app-product-list',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']})
export class ProductListComponent implements OnInit {
    products!: Product[];
    // constructor() {
    //     this.products = [];
    //     this.products.push({name:'aaa',price:990});
    //     this.products.push({name:'bbb',price:1000});
    //     this.products.push({name:'ccc',price:500}); 
    // }
    constructor(){
        this.products = [];
    }
    ngOnInit() {}
    
    selectedProduct(products: Product) {
        alert("Product " + products.name+ " selected"); 
    }
    
}
