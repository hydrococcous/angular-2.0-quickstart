import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-documents></my-documents>
    `
})
export class AppComponent{
  title = 'Aktentasche';
}
