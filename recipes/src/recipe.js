class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.ingredients = recipe.ingredients;
    this.attempted = false;
    this.rating = null;
  }

  rateRecipe(rating) {
    this.attempted = true;
    this.rating = rating;
  }

  changeIngredientAmount(ingredient, amount) {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name = ingredient) {
        this.ingredients[i].amount = amount;
      }
    }
  }

  generateGroceryList() {
    var groceryList = 'You need:';
    for (var i = 0; i < this.ingredients.length; i++) {
      groceryList += ` ${this.ingredients[i].amount} ${this.ingredients[i].name},`;
    }
    return groceryList;
  }
}

module.exports = Recipe;
