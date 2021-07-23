import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { MenuComponent } from './menu.component';
import { CarneAsadaComponent } from './CarneAsada.component';

@NgModule({
    declarations: [
        MenuComponent,
        CarneAsadaComponent

    ],

    exports: [
        MenuComponent,
        CarneAsadaComponent
    ],

    imports: [
        CommonModule

    ],
})

export class MenuModule{

}