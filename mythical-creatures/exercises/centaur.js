class Centaur {
  constructor(Hobbit) {
    this.name = Hobbit.name;
    this.breed = Hobbit.type;
    this.cranky = false;
    this.crankyCounter = 0;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    this.crankyCounter++;
    
    if (this.crankyCounter >= 3) {
      this.cranky = true;
    }
    
    if (this.cranky || this.layingDown) {
      return 'NO!'
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.crankyCounter++;
    
    if (this.crankyCounter >= 3 || this.layingDown) {
      this.cranky = true;
    }
    
    if (this.cranky) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.crankyCounter = 0;
      return 'ZZZZ';
    } else {
      return 'NO!';
    }
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
      this.crankyCounter = 0;
    } else {
      return 'Not while I\'m laying down!';
    }  
  }
}

module.exports = Centaur;