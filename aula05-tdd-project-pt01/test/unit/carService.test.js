import { join } from "path";

import { before, describe } from "mocha";
import { CarService } from "../../src/service/car.service.js";
import { ___DIRNAME } from "../../src/utils/index.js";

const carsDatabase = join(___DIRNAME, "./../../database", "cars.json");

describe("CarService Suite Tests", () => {
  let carService = {};

  before(() => {
    carService = new CarService({
      cars: carsDatabase,
    });
  });
  it("given a carCategory ir should return an available car", async () => {
    const result = await carService.test(
      "082728c9-2a90-4bee-aa2f-2b7c6939d884"
    );
    console.log({ result });
  });
});
