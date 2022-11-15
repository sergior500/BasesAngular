import {Component} from '@angular/core'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class listaComponent{
    list = [
        { element : 'Tennis', needed: 'raqueta'},
        { element : 'Furbo', needed: 'balonsito'},
        { element : 'Balonsesto', needed : 'balonsitoBalonsesto'},
        { element : 'Voleybola', needed : 'balonsitoVoleybola'}
    ];
}