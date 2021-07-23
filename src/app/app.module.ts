import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from './Domicilios/menu/menu.module';
import { HeladosModule } from './Domicilios/Helados/Helados.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    MenuModule,
    HeladosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
