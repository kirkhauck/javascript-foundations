class Wand {
  constructor(wandType, wandSize, wandCore) {
    this.type = wandType;
    this.size = wandSize;
    this.core = wandCore;
  }

  cast(spell) {
    return `Casting ${spell}!`;
  }
}

module.exports = Wand;