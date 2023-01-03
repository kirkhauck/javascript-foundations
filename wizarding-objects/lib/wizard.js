class Wizard {
  constructor(wizard) {
    this.name = wizard.name;
    this.pets = [];
    this.petsCount = 0;
    this.wand;
  }

  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount = this.pets.length;
  }

  petList() {
    var list = '';
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < this.pets.length; i++) {
      var vowelStart = false;
      for (var j = 0; j < vowels.length; j++) {
        if (this.pets[i].type.charAt(0) === vowels[j]) {
          vowelStart = true;
        }
      }
      if (vowelStart) {
        list += `An ${this.pets[i].type} named ${this.pets[i].name}; `
      } else {
        list += `A ${this.pets[i].type} named ${this.pets[i].name}; `
      }
    }
    list = list.slice(0, -2) + '.';
    return list;
  }

  getWand(wand) {
    this.wand = wand;
  }

  castSpell(spell) {
    return `Casting ${spell}!`
  }
}

module.exports = Wizard;