import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <hr />
    <nav>
      <a routerLink="/one">Route 1</a>
      <a routerLink="/two">Route 2</a>
      <a routerLink="/three">Route 3</a>
    </nav>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent  {
  name = 'Angular 2.0 Routing Module';
}
