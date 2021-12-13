class Vehicle {
  constructor(name, numberOfWheels) {
    this.numberOfWheels = numberOfWheels;
    this.name = name;
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  // startMachine() {
  //   console.log(`${this.name} lifting anchor up`);
  //   this.move();
  // }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  // stopMachine() {
  //   this.stop();
  //   console.log(`${this.name} lifting anchor down`);
  // }
  // stop() {
  //   super.stop();
  //   console.log(`${this.name} lifting anchor down`);
  // }
}

const ship1 = new Ship('Aurora', false, 1000);
// stopMachine.startMachine();
console.log(ship1.move());
