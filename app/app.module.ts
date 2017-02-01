import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { DocDetailComponent } from "./doc-detail.component";
import {DocumentsComponent} from "./documents.component";
import {DocumentsService} from "./document.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DocDetailComponent, DocumentsComponent ],
  bootstrap:    [ AppComponent ],
  providers:[ DocumentsService]
})
export class AppModule { }
