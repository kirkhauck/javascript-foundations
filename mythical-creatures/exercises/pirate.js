class Pirate {
    constructor(pirateName, pirateJob, isCursed, pirateBooty) {
        this.name = pirateName;
        this.job = pirateJob || 'scallywag';
        this.cursed = isCursed || false;
        this.booty = pirateBooty || 0;
    }

    robShip() {
        if (this.booty < 500) {
            this.booty += 100;
            this.robCount += 1;
            return 'YAARRR!';
        } else {
            this.cursed = true;
            return 'ARG! I\'ve been cursed!'
        }
    }

    liftCurse() {
        if (this.booty >= 500) {
            this.booty -= 300;
            this.cursed = false;
            return 'Your curse has been lifted!';
        } else {
            return 'You don\'t need to lift a curse!';
        }
    }
};

module.exports = Pirate;