class Human {
  constructor(humanName) {
    this.name = humanName;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  noticesOgre() {
    if (this.encounterCounter !== 0 && this.encounterCounter % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;