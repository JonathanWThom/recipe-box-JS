import { Component } from '@angular/core';
import { Recipe } from './app.component'

@Component({
  selector: 'recipe-form',
  template: `
  <h1>Recipe Form</h1>
    <form (ngSubmit)="onSubmit()" #recipeForm="ngForm">
      <div class="form-group">
        <label for="title">Recipe Title</label>
        <input type="text" class="form-control" id="title" required [(ngModel)]="model.title" name="title">
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <input type="text" class="form-control" id="ingredients" required [(ngModel)]="model.ingredients" name="ingredients">
      </div>
      <div class="form-group">
        <label for="description">Instructions</label>
        <input type="text" class="form-control" id="description" required [(ngModel)]="model.instructions" name="instructions">
      </div>
      <div class="form-group">
        <label for="priority">Priority</label>
        <select class="form-control" id="priority" required [(ngModel)]="model.priority" name="priority">
          <option *ngFor="let priority of priorities" [value]="priority">{{priority}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-default" (click)="newRecipe(title, ingredients, instructions, priority); recipeForm.reset()">Submit</button>
    </form>
  `
})

export class RecipeFormComponent {
  priorites = [1, 2, 3];
  model = new Recipe('', '', '', 3);
  submitted = false;
  onSubmit() { this.submitted = true; }

  newRecipe() {
    this.model = new Recipe('', '', '', 3);
  }
}
