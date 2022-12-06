class Vampire {
    constructor(name, pet, thirsty, ouncesDrank) {
        this.name = name;
        this.pet = pet || 'bat';
        this.thirsty = thirsty || true;
        this.ouncesDrank = ouncesDrank || 0;
    }

    drink() {
        this.thirsty = false;
        if (this.ouncesDrank < 50) {
            this.ouncesDrank += 10;
        } else {
            return `I'm too full to drink anymore!`
        }
    }
}

module.exports = Vampire