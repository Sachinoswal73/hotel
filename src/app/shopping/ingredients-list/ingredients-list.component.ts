import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/models/ingredients.model';
import { ShoppingService } from 'src/app/shared/models/shopping.service';

@Component({
    selector : 'app-ingredients-list',
    templateUrl : 'ingredients-list.component.html',
    styleUrls : ['ingredients-list.component.css']
})

export class IngredientsListComponent implements OnInit {

    ingredientsArray : any = [];

    // @Input() set inputNewIngredientSetter( catchedNewIngredient : any ) {
    //     if( catchedNewIngredient ) {

    //         // console.log(catchedNewIngredient);

    //         this.ingredientsArray.push(catchedNewIngredient);

    //     }
    // };

    // @Input() inputNewIngredientSetter : any;
    
    
    // ingredientsArray = [
    //     new Ingredients('Salt', 5, 'Tata', '50', 'https://www.bigbasket.com/media/uploads/p/xxl/40285883-2_2-tata-salt-pink-salt-great-quality-for-everyday-cooking.jpg'),
    //     new Ingredients('Oil', 3, 'Saffola', '135', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61MyJMYmBYL._SX522_.jpg'),
    //     new Ingredients('Sugar', 5, 'Madhur','45','https://www.bigbasket.com/media/uploads/p/l/214431_11-madhur-sugar-refined.jpg')
    // ];   

    constructor( private shopServ : ShoppingService ){

        // console.log(this.ingredientsArray);

        // console.log(this.inputNewIngredient);

        // console.log(this.inputNewIngredientSetter);

        // this.ingredientsArray = shopServ.ingredientsArray;

    }


    ngOnInit(): void {
        
        // this.ingredientsArray = this.shopServ.ingredientsArray;

        this.ingredientsArray = this.shopServ.getIngredientsArray();  
        
        // this.shopServ.newIngredEmitter.subscribe( ( ingredArr : any ) => {
        
        //      this.ingredientsArray = ingredArr;
        // } );

        this.shopServ.newIngredObs.subscribe({
            next : ( ingredArr : any ) => {
                this.ingredientsArray = ingredArr;
            }
        })

    }

}