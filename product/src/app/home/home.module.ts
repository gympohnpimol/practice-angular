import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { MainContentComponentComponent } from './main-content-component/main-content-component.component';



@NgModule({
  declarations: [
    NavbarComponentComponent,
    MainContentComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
