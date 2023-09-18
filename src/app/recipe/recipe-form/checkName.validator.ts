import { OnInit, Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from 'rxjs';
import { RecipeService } from "src/app/shared/models/recipe.service";

@Injectable()

export class CheckNameValidator implements OnInit{

    // recNames : any;

    updRecArr : any; 

    constructor( public recSer : RecipeService ){

    }

    ngOnInit(): void {

        this.recSer.recArrObs.subscribe( (updArr : any) => {

            this.updRecArr = updArr;

    
        });    

    }

    
    
    static chkNam( nVal : AbstractControl ) : Promise< ValidationErrors | null> | Observable< ValidationErrors | null > {

        let recNames = ['Shira', 'Upit', 'Pohe'];

        return new Promise( ( resolve) => {

            setTimeout( () => {

                if( recNames.includes(nVal.value)) {
                    resolve({
                        newRecName : true
                    })
                }
                else {
                    resolve(null);
                }            
                     
            }, 1000 )

        } )

    }

}