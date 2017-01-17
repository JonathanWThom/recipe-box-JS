"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.recipes = [
            new Recipe("Meatballs", "Beef, Veal, love", "pat them together and cook", 1),
            new Recipe("Fluffy French Toast", "Bread, Eggs, Syrup, Half and Half, Oil, Flour, Cinnamon", "Fry it up, man", 3),
            new Recipe("Cinnamon Rolls", "Flour, Milk, Yeast, Sugar, Cinnamon, Raisins, Walnuts", "Bake it up, yo", 2)
        ];
        this.selectedRecipe = null;
    }
    AppComponent.prototype.editRecipe = function (clickedRecipe) {
        this.selectedRecipe = clickedRecipe;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedRecipe = null;
    };
    AppComponent.prototype.isTested = function (clickedRecipe) {
        if (clickedRecipe.tested === true) {
            alert("You've tried this one!");
        }
        else
            alert("You haven't tried this recipe yet!");
    };
    AppComponent.prototype.priorityColor = function (currentRecipe) {
        if (currentRecipe.priority === 3) {
            return "bg-danger";
        }
        else if (currentRecipe.priority === 2) {
            return "bg-warning";
        }
        else {
            return "bg-success";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n    <h1>Recipe Box</h1>\n\n    <div [class]=\"priorityColor(currentRecipe)\" *ngFor=\"let currentRecipe of recipes\">\n      <h4 (click)=\"isTested(currentRecipe)\">{{currentRecipe.title}}</h4>\n      <ul>\n        <li>{{currentRecipe.ingredients}}</li>\n        <li>{{currentRecipe.description}}</li>\n        <button (click)=\"editRecipe(currentRecipe)\">Edit!</button>\n      </ul>\n    </div>\n    <div *ngIf=\"selectedRecipe\">\n      <h4>{{selectedRecipe.title}}</h4>\n      <p>Tested? {{selectedRecipe.tested}}</p>\n      <h4>Edit Recipe</h4>\n      <label>Enter Title</label>\n      <input [(ngModel)]=\"selectedRecipe.title\">\n      <br>\n      <label>Enter Ingredients</label>\n      <input [(ngModel)]=\"selectedRecipe.ingredients\">\n      <br>\n      <label>Enter Description</label>\n      <input [(ngModel)]=\"selectedRecipe.description\">\n      <br>\n      <label>Enter Recipe Priority (3 is high, 1 is low):</label>\n      <br>\n      <input type=\"radio\" [(ngModel)]=\"selectedRecipe.priority\" [value]=\"1\">1 (Low Priority)<br>\n      <input type=\"radio\" [(ngModel)]=\"selectedRecipe.priority\" [value]=\"2\">2 (Medium Priority)<br>\n      <input type=\"radio\" [(ngModel)]=\"selectedRecipe.priority\" [value]=\"3\">3 (High Priority)\n      <button (click)=\"finishedEditing()\">Done</button>\n    </div>\n    <recipe-form></recipe-form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Recipe = (function () {
    function Recipe(title, ingredients, description, priority) {
        this.title = title;
        this.ingredients = ingredients;
        this.description = description;
        this.priority = priority;
        this.tested = false;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=app.component.js.map