class Unicorn {
  constructor(unicornName, unicornColor) {
    this.name = unicornName;
    this.color = unicornColor || 'white';
  }

  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }

  says(statement) {
    return `**;* ${statement} *;**`
  }
}

module.exports = Unicorn;