class Ingredient {
  constructor(ingredient) {
    this.name = ingredient.name;
    this.amount = ingredient.amount;
  }

  changeAmount(amount) {
    this.amount = amount;
  }
}

module.exports = Ingredient;
