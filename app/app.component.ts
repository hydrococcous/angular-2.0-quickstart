import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>Hello {{name}}</h1>
		<hr />
		<nav>
			<a routerLink="/one" routerLinkActive="active">Route 1</a>
			<a routerLink="/two" routerLinkActive="active">Route 2</a>
			<a routerLink="/three" routerLinkActive="active">Route 3</a>
		</nav>
		<router-outlet></router-outlet>
		`,
	styles: [`
		A.active{
			color: #ccc;
			cursor: default;
			text-decoration: none;
		}
	`]
})
export class AppComponent  {
    name = 'Angular 2.0 Routing Module';
}
