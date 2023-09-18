import { EventEmitter } from '@angular/core';
import { Ingredients } from "./ingredients.model";
import { Observable, Subject } from 'rxjs';

export class ShoppingService { 

    // newIngredEmitter = new EventEmitter();
    
    newIngredObs = new Subject();

    private ingredientsArray = [
        new Ingredients('Salt', 5, 'Tata', '50', 'https://www.bigbasket.com/media/uploads/p/xxl/40285883-2_2-tata-salt-pink-salt-great-quality-for-everyday-cooking.jpg'),
        new Ingredients('Oil', 3, 'Saffola', '135', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61MyJMYmBYL._SX522_.jpg'),
        new Ingredients('Sugar', 5, 'Madhur','45','https://www.bigbasket.com/media/uploads/p/l/214431_11-madhur-sugar-refined.jpg')
    ];  
    
    getIngredientsArray() {
        return this.ingredientsArray.slice();
    }

    addNewIngredient( newIngred : any ) {
        
        this.ingredientsArray.push(newIngred);
        
        // this.newIngredEmitter.emit(this.ingredientsArray.slice());
        
        this.newIngredObs.next(this.ingredientsArray.slice());

        // this.getIngredientsArray();

        // console.log(this.ingredientsArray);

    }

}