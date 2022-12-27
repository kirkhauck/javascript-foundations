class Dog {
  constructor(dog) {
    this.name = dog.name;
    this.age = dog.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }

  eat() {
    if (this.hungry) {
      this.hungry = false;
      return 'Yum!';
    } else {
      return 'I refuse to eat.';
    }
  }

  fetchBall() {
    if (this.energyLevel > 3) {
      this.energyLevel -= 1;
      return 'This is fun!';
    } else {
      return 'Nah, I\'m going to sleep instead.';
    }
  }

  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel += 1;
    } else {
      return 'I have too much energy to rest. I\'m going to chew something instead.';
    }
  }

  makeNewFriend(newFriend) {
    this.friends.push(newFriend.name);
  }
}

module.exports = Dog;
