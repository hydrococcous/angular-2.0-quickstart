import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { DocDetailComponent } from "./doc-detail.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DocDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
