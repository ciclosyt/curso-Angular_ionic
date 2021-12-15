class Car {

  constructor(brand) {
    this.brand = brand;
    this.km = 0;
  }

  move(km) {
    this.km += km;
  }

  toString() {
    return `${this.brand} car with ${this.km} km`;
  }
}

module.exports = {
  Car
};
