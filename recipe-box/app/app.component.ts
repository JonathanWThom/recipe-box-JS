import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>

    <div *ngFor="let currentRecipe of recipes">
      <h4 (click)="showIngredients(currentRecipe)">{{currentRecipe.title}}</h4>
      <ul>
        <li>{{currentRecipe.ingredients}}</li>
        <li>{{currentRecipe.description}}</li>
        <button (click)="editRecipe()">Edit!</button>
      </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe ("Meatballs", "Beef, Veal, love", "pat them together and cook"),
    new Recipe ("Fluffy French Toast", "Bread, Eggs, Syrup, Half and Half, Oil, Flour, Cinnamon", "Fry it up, man"),
    new Recipe ("Cinnamon Rolls", "Flour, Milk, Yeast, Sugar, Cinnamon, Raisins, Walnuts", "Bake it up, yo")
  ];

  editRecipe() {
    alert("You just requested to edit a Recipe");
  }

  showIngredients(clickedRecipe: Recipe) {
    if(clickedRecipe.ingredients){
      alert(clickedRecipe.ingredients);
    } else
      alert("No ingredients listed yet");
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public description: string) { }
}
