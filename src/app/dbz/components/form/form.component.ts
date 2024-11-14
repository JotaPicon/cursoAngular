import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inerface';

@Component({
  selector: 'app-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter

  public character: Character = {
    name: '',
    power:0
  };
  emitCharacter():void {
    console.log(this.character)
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)
    this.character.name = '',
    this.character.power = 0
  }
}
