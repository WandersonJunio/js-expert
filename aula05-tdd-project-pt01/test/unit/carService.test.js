import { join } from "path";

import { before, describe } from "mocha";
import { CarService } from "../../src/service/car.service.js";
import { ___DIRNAME } from "../../src/utils/index.js";
import assert from "assert";

const carsDatabase = join(___DIRNAME, "./../../database", "cars.json");

const mocks = {
  validCar: import("../mocks/valid-car.json"),
  validCategory: import("../mocks/valid-carCategory.json"),
  validCustomer: import("../mocks/valid-customer.json"),
};

describe("CarService Suite Tests", () => {
  let carService = {};

  before(() => {
    carService = new CarService({
      cars: carsDatabase,
    });
  });
  it("given a carCategory ir should return an available car", async () => {
    const result = await carService.getAvailableCar();
    const expected = {};

    assert.deepStrictEqual(result, expected);
  });
});
