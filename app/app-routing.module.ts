import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {OneComponent} from './one.component';
import {TwoComponent} from './two.component';
import {ThreeComponent} from './three.component';

const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: '', redirectTo: '/one', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
