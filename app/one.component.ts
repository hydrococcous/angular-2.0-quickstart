import { Component } from '@angular/core'

@Component({
  selector: 'one',
  template: `
    <h2>One</h2>
    <p>{{text}}</p>
    `
})
export class OneComponent{

  constructor(){
    console.log('One');
  }

  text:string = 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. ' +
    'Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein ' +
    'namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, ' +
    'in dem einem gebratene Satzteile in den Mund fliegen. ';

}
