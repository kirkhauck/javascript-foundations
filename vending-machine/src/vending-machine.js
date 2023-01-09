class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    var isPresent = false;
    for (var i = 0; i < this.snacks.length; i++) {
      if (snack.name === this.snacks[i].name) {
        isPresent = true;
      }
    }
    if (!isPresent) {
      this.snacks.push(snack);
    } else {
      return 'Sorry, that snack is already stocked! Try adding a different snack.';
    }
  }

  purchaseSnack(name, payment) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (payment < this.snacks[i].price) {
        return 'Sorry, not enough payment. Please add more money.';
      } else if (this.snacks[i].itemsInStock === 0) {
        return 'Sorry, no items in stock. Try another item.'
      } else if (name === this.snacks[i].name) {
        this.snacks[i].itemsInStock -= 1;
        return `Success! Here is $${payment - this.snacks[i].price} back!`;
      }
    }
  }
}

module.exports = VendingMachine;
