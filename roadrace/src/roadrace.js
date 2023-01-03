class Roadrace {
  constructor(race) {
    this.name = race.title;
    this.location = race.city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(miles) {
    this.distance = miles;
    return `The ${this.name} in ${this.location} is a ${miles} mile race.`;
  }

  registerParticipants(participant) {
    this.participants.push(participant);
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;
