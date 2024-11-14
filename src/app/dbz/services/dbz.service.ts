import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inerface';
import {v4 as uuid} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Gokú',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegueta',
    power: 7500
  }
];

addCharacter( character: Character ){

    const newCharacter: Character = { id: uuid(), ...character};
    this.characters.push(newCharacter)

  }

//onDeleteCharacter(index:number){
  //  this.characters.splice(index);

  deleteCharacterById(id:String){
    this.characters = this.characters.filter(character => character.id !== id);
  }



}
