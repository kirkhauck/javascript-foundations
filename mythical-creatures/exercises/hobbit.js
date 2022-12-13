class Hobbit {
    constructor(Hobbit, hobbitAge, isAdult, isOld, hobbitHasRing) {
        this.name = Hobbit.name;
        this.age = hobbitAge || 0;
        this.adult = isAdult || false;
        this.old = isOld || false;
        this.hasRing = hobbitHasRing;
    }

    celebrateBirthday() {
        this.age++;

        if (this.age < 33) {
            this.adult = false;
            this.old = false;
        } else if (this.age < 101) {
            this.adult = true;
            this.old = false;
        } else {
            this.adult = true;
            this.old = true;
        }
    }

    getRing() {
        if (this.name === 'Frodo') {
            this.hasRing = true;
            return 'Here is the ring!';
        } else {
            this.hasRing = false;
            return 'You can\'t have it!';
        }
    }
}

module.exports = Hobbit;