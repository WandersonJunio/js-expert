const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");

describe("API Suite test", () => {
  describe("/user", () => {
    it("Should request the contact page and return HTTP status 200", async () => {
      const response = await request(app).get("/user").expect(200);
      assert.deepStrictEqual(response.text, "User infos");
    });
  });

  describe("/hello", () => {
    it("Should request an inexistent route /hi and redirect to /hello", async () => {
      const response = await request(app).get("/hi").expect(200);
      assert.deepStrictEqual(response.text, "Hello, world");
    });
  });
});
