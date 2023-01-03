class Cabinet {
  constructor() {
    this.potions = [];
  }

  isEmpty() {
    if (!this.potions.length) {
      return true;
    } else {
      return false;
    }
  }

  add(potions) {
    if (!Array.isArray(potions)) {
      this.potions.push(potions);
    } else {
      for (var i = 0; i < potions.length; i++) {
        this.potions.push(potions.slice(i, i + 1));
      }
    }
  }

  takeFirstPotion() {
    var potion = this.potions.shift();
    return potion.shift();
  }

  takePotionWithName(potion) {
    for (var i = 0; i < this.potions.length; i++) {
      if (potion === this.potions[i][0].name) {
        var potionIndex = this.potions.splice(i, 1);
        return potionIndex[0][0];
      }
    }
  }

  count(potion) {
    var counter = 0;
    for (var i = 0; i < this.potions.length; i++) {
      if (potion === this.potions[i][0].name) {
        counter++;
      }
    }
    return counter;
  }
}

module.exports = Cabinet;