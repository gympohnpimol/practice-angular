import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from "primeng/progressbar";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";


import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
  imports: [ BrowserModule, 
            FormsModule, 
            BrowserAnimationsModule, 
            DropdownModule , 
            MultiSelectModule  , 
            MatCheckboxModule, 
            MatTabsModule, 
            CdkTableModule, 
            MatSortModule, 
            MatPaginatorModule, 
            ProgressBarModule, 
            TooltipModule, 
            MatSlideToggleModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
