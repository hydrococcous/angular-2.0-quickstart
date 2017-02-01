import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <hr />
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/documents">Dokumente</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent{
  title = 'Aktentasche';
}
