
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/models/recipe.service';

@Component({
    selector : 'app-recipe-list',
    templateUrl : 'recipe-list.component.html',
    styleUrls : ['recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    constructor( private reciServ : RecipeService, public ar1 : ActivatedRoute ){
    
    }

    // @Output() outputRec = new EventEmitter();

    recipesArray : any = [];

    // recipesArray = this.reciServ.recipesArray;

        passRecToParent( recData : any) {
            
            // console.log('Rec received to Recipe List Compo', recData);

            // this.outputRec.emit(recData);

        }

        ngOnInit(): void {
            
            // this.recipesArray = this.reciServ.getRecipeArrayList();

            this.reciServ.recArrObs.subscribe( ( recArr : any ) => {
                this.recipesArray = recArr;
            } )

        }
        

}