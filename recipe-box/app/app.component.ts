import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe ("Meatballs", "Beef, Veal, love", "pat them together and cook"),
    new Recipe ("Fluffy French Toast", "Bread, Eggs, Syrup, Half and Half, Oil, Flour, Cinnamon", "Fry it up, man"),
    new Recipe ("Cinnamon Rolls", "Flour, Milk, Yeast, Sugar, Cinnamon, Raisins, Walnuts", "Bake it up, yo")
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public description: string) { }
}
