import Base from "./base/base.js";

class Car extends Base {
  constructor({ id, name, reselaseYear, available, gasAvailable }) {
    super({ id, name });

    this.reselaseYear = reselaseYear;
    this.available = available;
    this.gasAvailable = gasAvailable;
  }
}

export { Car };
