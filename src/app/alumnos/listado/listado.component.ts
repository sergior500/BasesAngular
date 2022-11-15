import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  title:String = "Listado de alumnos";
  alumnos:String[] = ['Sergio','Javier','Pilar','Vicentico'];
  alumnosAprobados:String[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  aprobar(): void {
    this.alumnosAprobados.push(this.alumnos[this.alumnos.length-1]);
    this.alumnos.pop();
  }

}
