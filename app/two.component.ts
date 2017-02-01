import { Component } from '@angular/core'

@Component({
  selector: 'two',
  template: `
    <h2>Two</h2>
    <p>{{text}}</p>
    `
})
export class TwoComponent{

  constructor(){
    console.log('Two');
  }

  text:string = 'Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens ' +
    'verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben. Als Gregor Samsa eines Morgens aus unruhigen ' +
    'Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Bestätigung ' +
    'ihrer neuen Träume und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen Körper dehnte.';

}
