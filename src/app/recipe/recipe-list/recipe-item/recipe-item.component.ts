import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/shared/models/recipe.service';

@Component({
    selector : 'app-recipe-item',
    templateUrl : 'recipe-item.component.html',
    styleUrls : ['recipe-item.component.css']
})

export class RecipeItemComponent {

    @Input() inputRec : any;

    @Input() selInd : any;

    // @Output() outputRec = new EventEmitter<{}>();

    constructor( private recipeServ : RecipeService ) {

    }

    // passRecToList( ) {
 
    //     // console.log('passing function', recData);
        
    //     // this.outputRec.emit(recData);

    //     // this.outputRec.emit(this.inputRec);

    //     // this.outputRec.emit();

    //     this.recipeServ.selectedRecipeEmit.emit(this.inputRec);

    // }

}