var Recipe = require('../src/recipe.js');

class Chef {
  constructor(name, recipes) {
    this.name = name;
    this.recipeBox = recipes;
  }

  tryRecipe(recipe, rating) {
    for (var i = 0; i < this.recipeBox.length; i++) {
      if (this.recipeBox[i].name = recipe) {
        this.recipeBox[i].attempted = true;
        this.recipeBox[i].rating = rating;
      }
    }
  }

  addRecipe(recipe, ingredients) {
    var newRecipe = {name: recipe, ingredients};
    newRecipe = new Recipe(newRecipe);
    this.recipeBox.push(newRecipe);
  }

  changeRecipe(recipe, ingredient, amount) {
    for (var i = 0; i < this.recipeBox.length; i++) {
      if (recipe === this.recipeBox[i].name) {
        this.recipeBox[i].changeIngredientAmount(ingredient, amount);
      }
    }
  }
}

module.exports = Chef;
