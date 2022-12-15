var Medusa = require('./medusa');
var Statue = require('./statue');

class Person {
  constructor(personName) {
    this.name = personName;
    this.mood = 'frightened'
  }
}

module.exports = Person;