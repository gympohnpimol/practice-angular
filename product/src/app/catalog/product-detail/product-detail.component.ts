import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId! : number;
  routes: any;
  constructor(privateroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((p: { id: number; })=> {this.productId = p.id;
    }
    );
  }

}
