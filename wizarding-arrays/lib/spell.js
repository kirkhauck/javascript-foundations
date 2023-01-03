class Spell {
  constructor(spellName, spellDescription) {
    this.name = spellName;
    this.description = spellDescription;
    this.executionHistory = [];
  }

  execute(spellTargets) {
    var executedTargets = [];

    if (!Array.isArray(spellTargets)) {
      return `Success! You've cast a spell on the ${spellTargets}.`;
    } else {
      for (var i = 0; i < spellTargets.length; i++) {
        this.executionHistory.push(spellTargets[i]);
        executedTargets.push(`Success! You've cast a spell on the ${spellTargets[i]}.`);
      }
    }
    return executedTargets.join(' ');
  }

  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;