import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  heroes=[
    {name: "Shelly", HP:3600},
    {name: "Nita", HP:3800},
    {name: "Colt", HP:2800},
    {name: "Jessie", HP:700}
  ]

  hero = {name: "Ejemplo", HP: 1000};
  
  constructor() { }

  ngOnInit(): void {
  }

}
