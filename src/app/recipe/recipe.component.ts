import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../shared/models/recipe.service';

@Component({
    selector : 'app-recipe',
    templateUrl : './recipe.component.html',
    styleUrls : ['recipe.component.css']
})

export class RecipeComponent implements OnInit {

    receivedRecipe : any; 
    
    constructor( private recSer : RecipeService ) {

    }

    ngOnInit(): void {
        
        // this.recSer.selectedRecipeEmit.subscribe( ( selectedRecipe : any ) => {

        //     this.receivedRecipe = selectedRecipe;

        // } )

    }

    // getRecToParent( eveData : any ) {

    //     // console.log('Rec received to Recipe / Main Compo', eveData);

    //     this.receivedRecipe = eveData;

    // }



}