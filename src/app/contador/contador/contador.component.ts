import {Component  } from "@angular/core";

@Component({
    selector: 'app-component',

    template: `
        <h1>{{titulo}}</h1>
        
        <h3>La base es: <strong>{{abase}}</strong></h3>

        <button (click)="acumular(abase);"> + {{abase}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-abase);"> - {{abase}}</button>
    `
})

export class ContadorComponent{

  titulo: string = 'Contador App';
  numero: number = 10;
  abase: number = 5;

  acumular (valor: number){
    this.numero += valor;
  } 
}