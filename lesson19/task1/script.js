// // vehicle and ship

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   lifAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
//   __proto__: vehicle,
// };

// console.log(ship.move());
// console.log(ship);

// // vehicle.move();

// //console.log(vehicle.toString);
// // console.log(vehicle);
// // console.log([1, 2].map === [1, 2].map);

// ship.run();
// Prototype;

// Object.setPrototypeOf(ship, vehicle);

// vehicle and ship

// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   lifAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// ship.move();

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  liftAnchorUp() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);
