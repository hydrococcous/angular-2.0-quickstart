import {Component, OnInit} from '@angular/core';
import {Dokument} from "./dokument";
import {DocumentsService} from "./document.service";


@Component({
  selector: 'my-dashboard',
  templateUrl: 'templates/dashboard.component.html',
  moduleId: module.id
})

export class DashboardComponent implements OnInit{
  dokumente: Dokument[] = [];

  constructor(private documentsService: DocumentsService) { }

  ngOnInit(): void {
    this.documentsService.getDocuments()
      .then(dokumente => this.dokumente = dokumente.slice(1, 5));
  }
}
