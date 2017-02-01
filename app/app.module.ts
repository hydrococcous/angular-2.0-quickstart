import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import {DashboardComponent} from "./dashboard.component";
import { DocDetailComponent } from "./doc-detail.component";
import {DocumentsComponent} from "./documents.component";
import {DocumentsService} from "./document.service";

import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DocDetailComponent,
    DocumentsComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:[
    DocumentsService,
    { provide: APP_BASE_HREF, useValue: '/'}
    ]
})
export class AppModule { }
