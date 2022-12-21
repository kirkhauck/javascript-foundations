class Material {
  constructor(matName, matPrice, matAmount, matUnits) {
    this.name = matName;
    this.price = matPrice;
    this.amount = matAmount;
    this.units = matUnits;
  }

  useMaterial(num) {
    if (this.amount >= num) {
      this.amount -= num;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
    } else {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
    }
  }

  calculateMaterialCost() {
    return this.price * this.amount;
  }
}

module.exports = Material;
