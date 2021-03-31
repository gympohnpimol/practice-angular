import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { CountingComponent } from './counting/counting.component'
import { FormsModule } from '@angular/forms';
import { LabComponent } from './lab4/lab4.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    LabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
