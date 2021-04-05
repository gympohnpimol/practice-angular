import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item.component';
import { ProductListComponent } from './product/product-list.component';
import { BackendService } from'./backend.service';
import { CatalogModule } from'./catalog/catalog.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeComponent } from './home/home.component';
import { RouterModule } from './router/router.module';
import { Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home' }, 
  {path:'home',component:HomeModule }, 
  {path:'login',component:LoginComponent }, 
  {path:'products/:id',component:ProductListComponent }, 
  {path:'**',component:PageNotFoundComponent }]
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductItemComponent,
    // HomeComponent,
    LoginComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    CatalogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

