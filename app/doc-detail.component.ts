import {Component} from "@angular/core";


@Component({
  selector: 'doc-detail',
  template: `
        <div *ngIf="dokument">
        {{dokument.name}}
        </div>
        `
})
export class DocDetailComponent{}
