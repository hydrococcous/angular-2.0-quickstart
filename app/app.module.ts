import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { DocDetailComponent } from "./doc-detail.component";
import {DocumentsComponent} from "./documents.component";
import {DocumentsService} from "./document.service";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'documents', component: DocumentsComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
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
