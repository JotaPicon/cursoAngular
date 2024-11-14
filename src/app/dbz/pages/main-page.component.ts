import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inerface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainDbzComponent{

constructor(private dbzService:DbzService){}
  get characters() : Character[]{
    return [...this.dbzService.characters];
}
onDeleteCharacter(id: String): void{
  this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character: Character):void{
  this.dbzService.addCharacter(character);
}

}
