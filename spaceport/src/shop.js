const Part = require("./part");

class Shop {
  constructor(shop) {
    this.name = shop.name;
    this.inventory = {};
  }

  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.type] = part;
    }
  }

  outfitShip(ship, part) {
    if (!ship.captain) {
      return 'cannot outfit a ship without a captain';
    } else if (ship.captain.credits < this.inventory[part].value) {
      var creditsNeeded = this.inventory[part].value - ship.captain.credits;
      return `you require ${creditsNeeded} more credits to make this purchase`;
    } else {
      ship.updatePart(this.inventory[part]);
      ship.captain.credits = ship.captain.credits - this.inventory[part].value;
      delete this.inventory[part];
      return `${part} added to ship`;
    }
  }
}

module.exports = Shop;