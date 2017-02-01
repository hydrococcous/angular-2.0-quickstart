import {Component, OnInit} from '@angular/core';
import { Dokument } from './dokument';
import { DocumentsService } from './document.service'

@Component({
  selector: 'my-app',
  styleUrls: ['./app/app.component.css'],
  templateUrl: './app/app.component.html',
  providers: [DocumentsService]
})
export class AppComponent implements OnInit{

  title = 'Aktentasche';
  dokumente: Dokument[];
  selectedDoc: Dokument;

  constructor(private documentService: DocumentsService){}

  getDocuments(): void {
    this.documentService.getDocuments().then(dokumente => this.dokumente = dokumente)
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  onSelect(dokument: Dokument): void{
    this.selectedDoc = dokument;
  }


}
