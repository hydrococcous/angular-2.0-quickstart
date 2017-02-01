import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

import {Dokument} from './dokument';
import {DocumentsService} from "./document.service";

@Component({
  moduleId: module.id,
  selector: 'doc-detail',
  templateUrl: './templates/doc-detail.component.html'

})
export class DocDetailComponent implements OnInit{

  dokument: Dokument;

  constructor(
    private documentsService: DocumentsService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.documentsService.getDocument(+params['id']))
      .subscribe(dokument => this.dokument = dokument);
  }

  goBack(): void{
      this.location.back();
  }

}
