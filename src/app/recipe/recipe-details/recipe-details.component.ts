import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/models/recipe.service';

@Component({
    selector : 'app-recipe-details',
    templateUrl : 'recipe-details.component.html',
    styleUrls : ['recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {

    @Input() fetchedRecipe : any;

    constructor( private ar1 : ActivatedRoute, private recSer : RecipeService ) {

    }

    ngOnInit(): void {
        
        this.ar1.params.subscribe( ( prm : any) => {

            // console.log( this.recSer.recipesArray[prm.selectedIndex] );        

            // this.fetchedRecipe = this.recSer.recipesArray[prm.selectedIndex];

            this.fetchedRecipe = this.recSer.getRecipeObj(+prm.selectedIndex);

        } )

    }

}