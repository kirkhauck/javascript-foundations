class Robe {
  constructor() {
    this.pockets = [[],[],[],[],[],[],[],[],[],[]]
  }

  addToPocket(item) {
    for (var i = 0; i < this.pockets.length; i++) {
      if (!this.pockets[i].length) {
        this.pockets[i].push(item);
        break;
      }
    }
  }

  retrieve(item) {
    for (var i = 0; this.pockets.length; i++) {
      if (this.pockets[i][0] === item) {
        return this.pockets[i].splice(0, 1);
      }
    }
  }

  emptyAllPockets() {
    this.pockets = [[],[],[],[],[],[],[],[],[],[]]
  }
}

module.exports = Robe;