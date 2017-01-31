import { Component } from '@angular/core';

export class Dokumente {
  id: number;
  name: string;
}

const DOKUMENTE: Dokumente[] = [
  { id: 11, name: 'Stadtratssitzung von 19.01.2016'},
  { id: 12, name: 'Bauantrag Grubenstraße 12'},
  { id: 13, name: 'Gemeinderatsbeschluss Nr 94-112'},
  { id: 14, name: 'Gemeinderatsbeschluss Nr 87-010'},
  { id: 15, name: 'Vorlage Gemeinderatssizung vom20.12.2014'},
  { id: 16, name: 'Mitgliederliste Gemeinderat Torgau'}
]

@Component({
  selector: 'my-app',
  template: `
            <h1>{{title}}</h1>
            <h2>Meine Dokumente</h2>
            <ul class="documents">
              <li *ngFor="let dokument of documente">
                <span class="badge">{{dokument.id}}</span> {{dokument.name}}
              </li>
            </ul>
            `,
  styleUrls: ['./app/app.component.css']
})
export class AppComponent  {

  title = 'Aktentasche';
  documente = DOKUMENTE;

}
