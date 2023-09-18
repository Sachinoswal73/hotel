import { NgModule } from "@angular/core";
import { ShoppingComponent } from "./shopping/shopping.component";
import { ShoppingFormComponent } from "./shopping/shopping-form/shopping-form.component";
import { CommonModule } from "@angular/common";
import { IngredientsListComponent } from "./shopping/ingredients-list/ingredients-list.component";
import { IngredientsItemComponent } from "./shopping/ingredients-list/ingredients-item/ingredients-item.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";
import { ShoppingRouterModule } from "./shopping-router.module";

@NgModule({
    declarations : [
        ShoppingComponent,
        ShoppingFormComponent,
        IngredientsListComponent,
        IngredientsItemComponent
    ],
    imports : [
        SharedModule,
        ShoppingRouterModule
    ]
})

export class ShoppingModule {

}