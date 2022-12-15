class Gear {
  constructor(gearType, gearQuantity) {
    this.type = gearType;
    this.quantity = gearQuantity;
  }

  checkForValidity() {
    if (this.type === 'ammunition' || this.type === 'clothes' || this.type === 'food') {
      return 'Great, we\'ll need lots of ammunition!';
    } else {
      var message = `I don\'t think a ${this.type} will help us.`
      this.type = null;
      return message;
    }
  }
}

module.exports = Gear;
