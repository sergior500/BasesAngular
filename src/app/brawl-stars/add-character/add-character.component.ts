import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../Interfaces/characters';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  constructor() { }

  @Input() hero:Characters = {name:"", HP: 0};
  
  @Input() heroes: Characters[] = [];

  addCharacter(){

    let heroReal ={
      name:this.hero.name,
      HP:this.hero.HP
    }
    
    this.heroes.push(heroReal);
    console.log("added");

  }
}
