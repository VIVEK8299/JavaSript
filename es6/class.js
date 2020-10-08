class car {
    constructor() {
        this.speed = 30;
    }
    acc() {
        this.speed += 40;
    }
    cspeed() {
        console.log(this.speed);
    }
}

const obj = new car();
obj.cspeed();
obj.acc();
obj.cspeed();