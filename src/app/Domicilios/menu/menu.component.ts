import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
  export class MenuComponent 
  {
      Comidas: String []= ['Carne Asada','Robalo Apanado','Ceviche'];
      borrado: String ='';

      MenuBorrado()
      {
        console.log('Borrando...');
        this.borrado = this.Comidas.shift() || '';
        
        
      }
      

  }



