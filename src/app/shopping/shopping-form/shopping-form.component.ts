import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { Ingredients } from "src/app/shared/models/ingredients.model";
import { FormsModule } from '@angular/forms';
import { ShoppingService } from "src/app/shared/models/shopping.service";

@Component({
    selector : 'app-shopping-form',
    templateUrl : 'shopping-form.component.html',
    styleUrls : ['shopping-form.component.css']
})

export class ShoppingFormComponent {

    @ViewChild('ingName') ingName : any;
    @ViewChild('ingBrand') ingBrand : any;
    @ViewChild('ingQuantity') ingQuantity : any;
    @ViewChild('ingCost') ingCost : any;
    @ViewChild('ingImagePath') ingImagePath : any;
    @ViewChild('form1') form1 : any;

    // @Output() emitNewIngredient = new EventEmitter();

    constructor( private shoSer : ShoppingService ) {



    }

    addNewIngredient(){

        // const newIngredient = new Ingredients(this.ingName.nativeElement.value, this.ingQuantity.nativeElement.value, this.ingBrand.nativeElement.value, this.ingCost.nativeElement.value, this.ingImagePath.nativeElement.value );

        const newIngredient = new Ingredients(this.form1.value.ingName, this.form1.value.ingQuantity, this.form1.value.ingBrand, this.form1.value.ingCost, this.form1.value.ingImagePath );

        // console.log(newIngredient);

        // console.log(this.form1.value.ingName);

        // this.shoSer.ingredientsArray.push(newIngredient);

        this.shoSer.addNewIngredient(newIngredient);   
        
        // console.log(this.shoSer.ingredientsArray);

        // this.emitNewIngredient.emit(newIngredient);

        // this.form1.resetForm();

        // this.form1.reset();

        this.clearForm();

    }

    clearForm(){
            (<HTMLFormElement>document.getElementById("form1")).reset();
    }


    onSubmit1() {

    }


}