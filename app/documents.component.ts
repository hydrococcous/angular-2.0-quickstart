import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import { Dokument } from './dokument';
import { DocumentsService } from './document.service'

@Component({
  selector: 'my-documents',
  styleUrls: ['./app/app.component.css'],
  templateUrl: './app/templates/documents.component.html',
  providers: [DocumentsService]
})
export class DocumentsComponent implements OnInit{

  title = 'Aktentasche';
  dokumente: Dokument[];
  selectedDoc: Dokument;

  constructor(private documentService: DocumentsService, private router: Router){}

  getDocuments(): void {
    this.documentService.getDocuments().then(dokumente => this.dokumente = dokumente)
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  onSelect(dokument: Dokument): void{
    this.selectedDoc = dokument;
  }

  gotoDetail(): void{
  	this.router.navigate(['/detail', this.selectedDoc.id]);
  }


}
