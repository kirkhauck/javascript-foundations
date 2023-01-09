class Planet {
  constructor(planet) {
    this.name = planet.name;
    this.shop = planet.shop;
    this.currentShip = undefined;
    this.coordinates = planet.coordinates;
  }

  landShip(ship) {
    this.currentShip = ship;
  }

  calculateDistance(otherPlanet) {
    var x1 = this.coordinates.x;
    var y1 = this.coordinates.y;
    var z1 = this.coordinates.z;
    var x2 = otherPlanet.coordinates.x;
    var y2 = otherPlanet.coordinates.x;
    var z2 = otherPlanet.coordinates.x;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
  }

  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }

  giveClearance(otherPlanet) {
    if (this.currentShip.fuel === 0) {
      return 'Clearance denied: Cannot fly without fuel';
    } else {
      this.currentShip.fuel = 0;
      otherPlanet.currentShip = this.currentShip;
      this.currentShip = undefined;
      return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`;
    }
  }
}

module.exports = Planet;