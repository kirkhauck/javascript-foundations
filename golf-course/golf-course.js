class GolfCourse {
  constructor(courseName, courseDifficulty, courseOpenings, courseFeatures) {
    this.name = courseName;
    this.difficulty = courseDifficulty;
    this.openings = courseOpenings
    this.features = courseFeatures
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if (group.length <= this.openings) {
      this.openings = this.openings - group.length;
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
      return 'You\'re checked in. Have fun!';
    } else {
      return 'Sorry, we are currently booked! Please come back later.';
    }
  }
}

module.exports = GolfCourse;