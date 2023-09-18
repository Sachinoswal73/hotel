import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ShoppingComponent } from "./shopping/shopping.component";

// We can create a seperate file for routing as we have created this one & then to import this file in it's belonging Module
// below the first path is '', cause this path is not starting from Root / app-routing file & & We have set the loadChildren : () method & then connected this Module, as we import forChild(shoppingRoutes), So angular already knows that it's a child of the main route

const shoppingRoutes : Routes = [
    {
        path : '', component : ShoppingComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(shoppingRoutes)
    ],
    exports : [RouterModule] // It's ok even though we don;t export RouterModule
})

export class ShoppingRouterModule {

}