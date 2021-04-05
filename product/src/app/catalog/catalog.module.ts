import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

import { BackendService } from'../backend.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { PanelComponent} from'./product/panel.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    // PanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent
  ],
  providers: [BackendService]
})
export class CatalogModule { }
