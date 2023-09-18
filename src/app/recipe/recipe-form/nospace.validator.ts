import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpaceValidator {

    static plzNoSpace( pVal : AbstractControl ) : ValidationErrors | null {

        if ( pVal.value?.includes(' ')) {
            return { noSpace : true }
        }
        else {
            return null;
        }

    }    

}