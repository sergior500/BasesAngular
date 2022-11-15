import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosModule } from './alumnos/alumnos.module';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { listaComponent } from './lista/lista.component';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    listaComponent,
    
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
