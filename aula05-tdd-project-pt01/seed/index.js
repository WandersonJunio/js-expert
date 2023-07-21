import { writeFileSync } from "fs";
import * as url from "url";

import { faker } from "@faker-js/faker";
import { CarCategory } from "../src/entities/CarCategory.js";
import { Car } from "../src/entities/Car.js";
import { join } from "path";
import { Customer } from "../src/entities/Customer.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const seederBaseFolder = join(__dirname, "../", "database");
const ITEMS_AMOUNT = 3;

const carCategory = new CarCategory({
  id: faker.datatype.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100),
});

const cars = [];
const customers = [];
for (let index = 0; index <= ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.datatype.uuid(),
    name: faker.vehicle.type(),
    available: true,
    gasAvailable: true,
    reselaseYear: faker.date.past().getFullYear(),
  });

  const customer = new Customer({
    id: faker.datatype.uuid(),
    name: faker.name.firstName,
    age: faker.number.int({ min: 18, max: 90 }),
  });

  carCategory.carIds.push(car.id);
  cars.push(car);
  customers.push(customer);
}

const write = (filename, data) =>
  writeFileSync(join(seederBaseFolder, filename), JSON.stringify(data));

(() => {
  write("cars.json", cars);
  write("carCategories.json", carCategory);
  write("customers.json", customers);
})();
