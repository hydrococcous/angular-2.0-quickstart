import {Component, Input} from "@angular/core";
import { Dokument } from './dokument';

@Component({
  selector: 'doc-detail',
  templateUrl: './app/doc-detail.component.html'

})
export class DocDetailComponent{
  @Input()
  dokument: Dokument;
}
