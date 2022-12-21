class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels = wagon.wheels || [];
    this.axles = wagon.axles || [];
    this.oxen = wagon.oxen || [];
    this.yokes = wagon.yokes || [];
    this.food = wagon.food;
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    this.settlers = wagon.settlers || [];
  }

  addPart(part) {
    if (part.type === 'wheel') {
      this.wheels.push(part);
    } else if (part.type === 'axle') {
      this.axles.push(part);
    } else if (part.type === 'ox') {
      this.oxen.push(part);
    } else if (part.type === 'yoke') {
      this.yokes.push(part);
    }
  }

  canTravel() {
    var wheelBroken = false;
    var axleBroken = false;
    var oxenBroken = false;

    for (var i = 0; i < this.wheels.length; i++) {
      if (this.wheels[i].broken) {
        wheelBroken = true;
      }
    }

    for (var i = 0; i < this.axles.length; i++) {
      if (this.axles[i].broken) {
        axleBroken = true;
      }
    }

    for (var i = 0; i < this.oxen.length; i++) {
      if (this.oxen[i].broken) {
        oxenBroken = true;
      }
    }
    
    if (this.wheels.length >= 4
    && !wheelBroken
    && this.axles.length >= 2
    && !axleBroken
    && this.oxen.length >= 2
    && !oxenBroken
    && this.yokes.length >= 1
    && this.settlers.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Wagon;