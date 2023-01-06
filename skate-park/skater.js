class Skater {
  constructor(skater) {
    this.name = skater.name;
    this.skill = skater.skill;
    this.tricks = skater.tricks
    this.money = skater.cash;
    this.frustration = 0;
  }

  practice(trick) {
    if (!this.tricks[trick]) {
      this.frustration++;
    }
    if (this.frustration === 3) {
      this.tricks[trick] = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`;
    }
  }
}

module.exports = Skater;