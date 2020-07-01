const app = require("../app");
// Supertest will handle testing for HTTP requests/responses
const request = require("supertest");
const Test = require("supertest/lib/test");

describe("GET / ", () => {
  test("Should respond with an array of students", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
    expect(response.statusCode).toBe(200);
  });
});
