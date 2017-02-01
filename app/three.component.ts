import { Component } from '@angular/core'

@Component({
  selector: 'three',
  template: `
    <h2>Three</h2>
    <p>{{text}}</p>
    `
})
export class ThreeComponent{

  constructor(){
    console.log('Three');
  }

  text:string = 'Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten ' +
    'Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd ' +
    'Bim. Sylvia wagt quick den Jux bei Pforzheim.';

}
