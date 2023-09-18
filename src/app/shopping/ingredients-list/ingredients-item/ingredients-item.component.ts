import { Component, Input } from '@angular/core';

@Component({
    selector : 'app-ingredients-item',
    templateUrl : 'ingredients-item.component.html',
    styleUrls : ['ingredients-item.component.css']
})

export class IngredientsItemComponent {

    @Input() receiveIngredient : any; 

}