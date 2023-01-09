var Being = require('../src/being');
const Part = require('./part');

class Ship {
  constructor(ship) {
    this.name = ship.name;
    this.type = ship.type;
    this.captain = ship.captain;
    this.maxCrew = ship.maxCrew;
    this.crew = [];
    this.cargo = [];
    this.odometer = ship.odometer || 0;
    this.fuelCapacity = ship.fuelCapacity || 10;
    this.fuel = 0;
    this.parts = ship.parts || {};
    this.readyToFly = false;
  }

  addCrew(crew) {
    for (var i = 0; i < crew.length; i++) {
      if (this.crew.length < this.maxCrew && crew[i] instanceof Being) {
        this.crew.push(crew[i]);
      }
    }
  }

  loadCargo(cargo) {
    if (cargo instanceof Part) {
      this.cargo.push(cargo);
    }
  }

  updatePart(part) {
    if (this.parts[part.type]) {
      var value1 = this.parts[part.type].value;
      this.parts[part.type] = part;
      var value2 = this.parts[part.type].value;
      return value1 - value2;
    } else {
      this.parts[part.type] = part;
    }
  }

  checkReadiness() {
    if (!this.captain) {
      this.readyToFly = false;
      return 'Cannot fly without a captain';
    } else if (!this.fuel) {
      this.readyToFly = false;
      return 'Cannot fly without fuel';
    } else if (Object.keys(this.parts).length === 0) {
      return 'Cannot fly without parts';
    } else {
      this.readyToFly = true;
      return 'Good to go!'
    }
  }
}

module.exports = Ship;