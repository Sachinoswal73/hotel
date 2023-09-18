import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './shared/models/recipe.service';
import { ShoppingService } from './shared/models/shopping.service';
import { ShoppingModule } from './shopping.module';
import { RecipeModule } from './recipe.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingModule, 
    RecipeModule
   //  If we import ShoppingModule & RecipeModule here then it will create instances of both the modules even though they are'nt required so it's best way to utilize them in lazyloading in App-Routing Module 
  ],
  providers: [RecipeService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
