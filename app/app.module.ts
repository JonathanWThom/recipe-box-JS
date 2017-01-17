import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { RecipeFormComponent } from './recipe-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RecipeFormComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
