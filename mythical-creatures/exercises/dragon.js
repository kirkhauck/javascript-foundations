class Dragon {
    
    constructor (name, rider, hungry) {
        this.name = name;
        this.rider = rider;
        this.hungry = hungry || true;
        this.eatCount = 0;
    }

    greet(rider) {
        return (`Hi, ${this.rider}!`);
    }

    eat() {
        this.eatCount += 1;
        
        if(this.eatCount >= 3) {
            this.hungry = false;
        }
    }
}



module.exports = Dragon;