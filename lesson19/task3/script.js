const vehicle = {
  isMoving: false,
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Aurora',
  hasWheels: false,
  lifAnchorDown() {
    console.log('lifting anchor down');
  },
  liftAnchorUp() {
    console.log('lifting anchor up');
  },
};

Object.setPrototypeOf(ship, vehicle);

// Чтобы получить только собственные свойства объекта можно воспользоваться следующими практиками

// первый способ
// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) console.log(prop);
// }
// второй способ
console.log(Object.keys(ship));

const getOwnProps = obj => {
  let arrayOfProps = [];
  for (let prop in obj) {
    console.log(typeof prop);
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      arrayOfProps.push(prop);
    }
  }
  return arrayOfProps;
};

console.log(getOwnProps(ship));
