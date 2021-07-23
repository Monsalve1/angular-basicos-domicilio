import { Component } from "@angular/core";


@Component({
    selector:'app-Helado',
    templateUrl: 'Helado.component.html'

})
    export class HeladoComponent
    {
        title: String = 'HELADOS';
        Fresa: string = 'Copa Fresa'
        CopaFresas: String [] = ['Fresas','Helado Vainilla'];
        CopaMelocoton: String[] = ['Melocoton','Chantilly'];

        MejorCopa (): String 
            {   
                return `${this.Fresa} : ${this.CopaFresas}`
            }


    }

