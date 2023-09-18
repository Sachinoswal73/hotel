import { EventEmitter } from '@angular/core';
import { RecipeModel } from "./recipe.model";
import { BehaviorSubject } from 'rxjs';

export class RecipeService {
    
    recipesArray = 
        [
        new RecipeModel('Misal', 'A fantastic Item for Spice Lovers.', 'https://im.whatshot.in/img/2022/May/misal-1653454576.jpg','30'),
        new RecipeModel('Momos', 'Steam filled dumpling with a wide range of taste.','https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg','45')
        ] 

    recArrObs = new BehaviorSubject(this.recipesArray.slice());

    getRecipeArrayList() {
        // return this.recipesArray.slice();
        // this.recArrObs.next(this.recipesArray);
    }

    getNamesArray(){

        this.recArrObs.next(this.recipesArray.slice());

        let recNames : any[] = [];

        this.recipesArray.forEach( ( ra : any) => {

            recNames.push(ra.name);

        })

        return recNames;

    }

    getRecipeObj( ind : any ) {
        return this.recipesArray.slice()[ind];
    }

    addNewRecipe(recOb : any){
        // console.log('AddNewRecipe triggred');
        this.recipesArray.push(recOb);
        // console.log(this.recipesArray);
        // this.recArrObs.subscribe( ( recArr : any ) => {
        //     this.recipesArray = recArr;
        // } )
        this.recArrObs.next(this.recipesArray.slice());
    }

    updateRecipeObj( eId : any, eObj : any ){
        // console.log('updateRecipeObj got triggred');
        this.recipesArray[eId] = eObj;
        this.recArrObs.next(this.recipesArray.slice());
    }

    // selectedRecipeEmit = new EventEmitter();

}