var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(medusaName) {
    this.name = medusaName;
    this.statues = [];
  }

  gazeAtVictim(person) {
    var statue = new Statue(person.name);
    if(this.statues.length < 3) {
      this.statues.push(statue);
      // console.log('STATUES ARRAY: ', this.statues);
    } else {
      var oldStatue = this.statues.shift();
      var oldStatueName = oldStatue.name;
      var revivedPerson = new Person(oldStatueName);
      revivedPerson.mood = 'relieved';
      this.statues.push(statue);
      return revivedPerson;
    }
  }
}

module.exports = Medusa;