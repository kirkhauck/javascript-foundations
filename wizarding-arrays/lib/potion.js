class Potion {
  constructor(potionName, potionRareness) {
    this.name = potionName;
    this.rareness = potionRareness || 0;
  }

  isRare() {
    if (this.rareness > 7) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Potion;