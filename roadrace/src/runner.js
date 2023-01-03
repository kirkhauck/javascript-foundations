class Runner {
  constructor(runnerName, runnerAge) {
    this.name = runnerName;
    this.age = runnerAge;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness += miles;
  }

  stretch() {
    this.fitness += 0.5;
  }

  runRace(name, miles) {
    this.completedRaces.push(name);
    this.runSomeMiles(miles);
  }
}

module.exports = Runner;
