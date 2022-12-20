var Werewolf = require('./werewolf');

class Victim {
 constructor (victimName) {
  this.name = victimName;
  this.alive = true;
 }
}

module.exports = Victim;