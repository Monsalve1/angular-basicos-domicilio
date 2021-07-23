import { Component } from '@angular/core';

@Component({
  selector: 'app-CarneAsada',
  template:  
  ` 
    <h1>{{title}}</h1>
        <button (click)="MenuRobaloApanado()">Robalo Apanado</button>
        <button (click)="MenuCarneAsada()">Carne Asada</button>

        <h3>{{Menu}} $<span>{{VMenu}}</span></h3>
        <button (click)="SumarAdiciones(AdicionPapas)">+ papas</button>
        <button (click)="RestarAdiciones(AdicionPapas)">- papas</button>
        <button (click)="SumarAdiciones(AdicionGaseosa)">+ Gaseosa</button>
        <button (click)="RestarAdiciones(AdicionGaseosa)">- Gaseosa</button>
  `
   
})

export class CarneAsadaComponent {
  title: string = 'Domicilios';
  Menu: String = 'Que Desea Ordenar';
  VMenu: number =0;
  AdicionPapas: number = 2000;
  AdicionGaseosa: number = 3000;
    

  SumarAdiciones(valor: number)
    {
      
      this.VMenu += valor;
      
      
    }

    RestarAdiciones(valor: number)
    {
      this.VMenu -= valor;
    }
    
    MenuRobaloApanado(): void 
    {
      this.Menu = 'Robalo Apanado',
      this.VMenu = 22000;
    }

    MenuCarneAsada(): void
    {
      this.Menu = 'Carne Asada',
      this.VMenu = 16000;
    }
   
}