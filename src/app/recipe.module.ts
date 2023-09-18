import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailsComponent } from "./recipe/recipe-details/recipe-details.component";
import { NoRecipeComponent } from "./recipe/no-recipe/no-recipe.component";
import { RecipeFormComponent } from "./recipe/recipe-form/recipe-form.component";
import { CommonModule } from "@angular/common";
import { Route, RouterModule, Routes } from "@angular/router";
import { SharedModule } from "./shared.module";

// below the first path is '', cause this path is not starting from Root / app-routing file & & We have set the loadChildren : () method & then connected this Module, as we import forChild(recipeRoutes), So angular already knows that it's a child of the main route

const recipeRoutes : Routes = [
    { path : '', component : RecipeComponent,
    children : [
        { path : '', component : NoRecipeComponent },
        { path : 'details/:selectedIndex', component : RecipeDetailsComponent },
        { path : 'addNew', component : RecipeFormComponent },
        { path : 'details/:selectedIndex/edit', component : RecipeFormComponent }
    ]
}
]

@NgModule({
    declarations :[
        RecipeComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailsComponent,
        NoRecipeComponent,
        RecipeFormComponent 
    ],
    imports : [
        CommonModule, 
        // must to import for all common things instead of importing the whole Browser Module
        SharedModule,
        // This is created by us & imported wherever all the modules are required
        RouterModule.forChild(recipeRoutes)
        // importing above created routes
    ],
    exports : [

    ]
})

export class RecipeModule{

}