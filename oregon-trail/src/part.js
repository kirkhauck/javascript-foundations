class Part {
  constructor(partType) {
    this.type = partType;
    this.broken = false;
    this.breakCounter = 0;
  }

  break() {
    this.broken = true;
    this.breakCounter++;
  }

  repair() {
    if(this.breakCounter < 2) {
      this.broken = false;
    } else {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    }
  }
}

module.exports = Part;
