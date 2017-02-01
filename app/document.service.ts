import {Injectable} from "@angular/core";
import {Dokument} from './dokument';
import {DOKUMENTE} from './mock-documents'

@Injectable()
export class DocumentsService{
  getDocuments(): Promise<Dokument[]> {
    return Promise.resolve(DOKUMENTE);
  }

  // Testfunction
  getDocumentsSlow(): Promise<Dokument[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getDocuments()), 8000)
    });
  }
}
