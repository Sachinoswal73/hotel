
import { AbstractControl, FormGroup, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/shared/models/recipe.service';

// export function titleValidator(recSer : RecipeService): ValidatorFn {
//     return ( inpVal : AbstractControl) => {
     
//         let namesArr = recSer.getNamesArray();

//         console.log(namesArr);
        
//       if ( namesArr.includes(inpVal.value) )
//             return { nameExists : true };
//       else
//             return null;
//     }
//   }

  export function titleValidator(recSer : RecipeService): AsyncValidatorFn {
    return ( inpVal : AbstractControl) : Promise< ValidationErrors | null> | Observable< ValidationErrors | null > => {

        // console.log(namesArr);
        
        return new Promise((resolve) => {

            let namesArr = recSer.getNamesArray();

            // console.log(namesArr);

            setTimeout( () => {

                if(namesArr.includes(inpVal.value)){
                    // console.log('resolv trgd');
                    resolve({nameExists : true})
                }
                else {
                    resolve(null);
                }

           }, 700 )

        })

    }
  }