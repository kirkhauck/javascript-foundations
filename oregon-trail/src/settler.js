class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(ailment) {
    var ailments = this.ailments;
    
    if (ailments.length < 3) {
      ailments.push(ailment);
    }
    
    if (ailments.length === 1) {
      this.status = 'fair';
    } else if (ailments.length === 2) {
      this.status = 'poor';
    } else if (ailments.length >= 3) {
      this.status = 'dead';
    }
  }

  heal() {
    var ailments = this.ailments;
    
    if (this.status !== 'dead') {
      ailments.splice(0, ailments.length);
      this.status = 'healthy';
    }
    return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
  }
}

module.exports = Settler;