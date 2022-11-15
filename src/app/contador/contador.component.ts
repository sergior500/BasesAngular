import {Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['../app.component.css']
})


export class ContadorComponent{
    title = 'Contador';
  contador: number = 18;
  base: number = 5;
  // incrementar(){
  //   this.contador += this.base;
  // }
  // decrementar(){
  //   this.contador -= this.base;
  // }

  aggregate(value:number){
    this.contador += value;
  }
}