import { BaseRepository } from "../repositoy/base/base.repository.js";

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars });
  }

  test(item) {
    return this.carRepository.find(item);
  }
}

export { CarService };
