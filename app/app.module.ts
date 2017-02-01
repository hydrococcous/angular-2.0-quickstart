import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {OneComponent} from "./one.component";
import {TwoComponent} from "./two.component";
import {ThreeComponent} from "./three.component";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, OneComponent, TwoComponent, ThreeComponent ],
  bootstrap:    [ AppComponent ],
  providers:[
    { provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppModule { }
