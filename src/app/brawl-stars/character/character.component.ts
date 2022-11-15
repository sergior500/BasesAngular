import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../Interfaces/characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent{

  constructor() { }

  @Input() heroes : Characters[] = [];


}
