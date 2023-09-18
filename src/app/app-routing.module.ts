import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// below code is for the lazy loading, It will create the instance of only those classes which is clicked required in the routes Eg. if user is going through any recipe route then it will create the instance of RecipeModule only



const routes: Routes = [
  {
    path : 'recipe', loadChildren : () => {
      return import('./recipe.module').then((r:any)=>{ return r.RecipeModule })
    }
  }
  ,
  {
    path : 'shopping', loadChildren : () => {
      return import('./shopping.module').then((s:any)=>{ return s.ShoppingModule })
    }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

