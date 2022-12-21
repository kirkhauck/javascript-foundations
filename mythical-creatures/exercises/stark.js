const Direwolf = require("./direwolf");

class Stark {
  constructor(stark) {
    this.name = stark.name;
    this.location = stark.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (!this.safe) {
      return 'Winter is Coming';
    } else {
      return 'The North Remembers';
    }
  }

  callDirewolf(wolfName, wolfHome) {
    var direwolf = new Direwolf(wolfName, wolfHome);
    direwolf.home = this.location;
    direwolf.starksToProtect.push(this);
    this.safe = true;
    return direwolf;
  }
}

module.exports = Stark;