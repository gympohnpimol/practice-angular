import { Injectable } from '@angular/core';
import { Product } from "./product/product";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts(): Product[] {
    return []; 
  }

}
