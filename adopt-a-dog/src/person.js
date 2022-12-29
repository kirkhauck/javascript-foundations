var Dog = require("./dog.js");

class Person {
  constructor(personName, dog) {
    this.name = personName;
    this.dog = undefined || dog;
  }

  fillFoodBowl() {
    this.dog.hungry = false;
  }

  throwBall() {
    if(this.dog.energyLevel > 3) {
      this.dog.energyLevel -= 1;
      return `${this.dog.name} loves playing fetch!`;
    }
  }

  introduceNewFriends(newFriend) {
    this.dog.friends.push(newFriend.name);
  }

  adoptAPup(pupName, pupAge) {
    var pup = new Dog({name: pupName, age: pupAge});
    
    if(!this.dog) {
      this.dog = pup;
    } else {
      return `You can\'t adopt ${pupName}. You already have ${this.dog.name}!`;
    }
  }
}

module.exports = Person;