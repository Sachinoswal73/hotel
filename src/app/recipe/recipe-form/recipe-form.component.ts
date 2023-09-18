import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/models/recipe.service';
import { NoSpaceValidator } from './nospace.validator';
import { CheckNameValidator } from './checkName.validator';
import { titleValidator } from './demoChk.validator';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})

export class RecipeFormComponent implements OnInit {

  recForm : any;

  // recObj : any;
  editObjId : any;

  isNewRecipe = false;

  constructor( private recSer : RecipeService, public ar1 : ActivatedRoute, private router1 : Router, private fb : FormBuilder ){

  }

  ngOnInit(): void {
    
    // In below from Object creation, I had used a custom Async Validator to check if any recipe name already exists but it was not able to fetch the arrayList in chkNam in checkName.validator.ts
    // So then used a asyncValidator function & then injected the service file into it directly & then we can see that directly imported that function along with the arguement as below as titleValidator(this.recSer)

      this.recForm = new FormGroup({
        // rName : new FormControl('',Validators.required, CheckNameValidator.chkNam),
        rName : new FormControl('',Validators.required,titleValidator(this.recSer)),
        rDesc : new FormControl('',Validators.minLength(10)),
        rImg : new FormControl('',[Validators.required, NoSpaceValidator.plzNoSpace]),
        rPrep : new FormControl('',Validators.required),
       
      });


      // We can use formBuilder for creating the object
      // this.recForm = this.fb.group({
      //   rName : this.fb.control(''),
      //   rDesc : this.fb.control(''),
      //   rImg : this.fb.control(''),
      //   rPrep : this.fb.control('')
      // })

      this.ar1.params.subscribe( ( prm : any ) => {
        
        // console.log(prm);

        if(prm['selectedIndex']) {

          this.isNewRecipe = false;
          this.editObjId = prm['selectedIndex'];
          // console.log(prm['selectedIndex']);
          let editToBeObj = this.recSer.getRecipeObj(this.editObjId);
          // console.log(editToBeObj);
          this.recForm.setValue({
            rName : editToBeObj.name,
            rPrep : editToBeObj.preparationTime,
            rImg : editToBeObj.imgPath,
            rDesc : editToBeObj.desc
          })
        }
        else {
          this.isNewRecipe = true;
        }

      })

  }

  onSubmit(){

    console.log(this.recForm);

    let recObj = new RecipeModel(this.recForm.value.rName, this.recForm.value.rDesc,this.recForm.value.rImg,this.recForm.value.rPrep);

    // console.log(recObj);
    // console.log('OnSubmit got triggred');

    if (this.isNewRecipe){
        this.recSer.addNewRecipe(recObj);
        this.router1.navigate(['recipe']);
    }
    else{
        this.recSer.updateRecipeObj( this.editObjId ,recObj);

        this.recForm.reset();
    }

  }

}
