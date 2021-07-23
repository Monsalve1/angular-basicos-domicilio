import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeladoComponent } from './Helado.component';

@NgModule ({

    declarations: [
        HeladoComponent
    ],

    exports: [
        HeladoComponent

    ],

    imports: [
        CommonModule,
    ]
})

export class HeladosModule{

}