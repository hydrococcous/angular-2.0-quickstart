import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from './dashboard.component'
import {DocumentsComponent} from './documents.component'
import {DocDetailComponent} from './doc-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'documents', component: DocumentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DocDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}


