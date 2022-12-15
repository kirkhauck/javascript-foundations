class Magician {
    constructor(Magician) {
        this.name = `The Great ${Magician.name}`;
        this.clothing = Magician.clothing;
        this.assistant = Magician.assistant;
        this.favoriteAccessory = this.clothing || 'top hat';
        this.confidencePercentage = 10;
    }

    performIncantation(incantation) {
        incantation = incantation.toUpperCase() + '!';
        return incantation;
    }

    performTrick() {
        if(this.favoriteAccessory === 'top hat') {
            this.confidencePercentage += 10;
            return 'PULL RABBIT FROM TOP HAT';
        } else {
            this.confidencePercentage += 10;
            return 'PULL DOVE FROM SLEEVE';
        }
    }

    performShowStopper() {
        if(this.confidencePercentage >= 100 && this.assistant) {
            return 'WOW! The magician totally just sawed that person in half!';
        } else {
            return 'Oh no, this trick is not ready!';
        }
    }

}

module.exports = Magician;