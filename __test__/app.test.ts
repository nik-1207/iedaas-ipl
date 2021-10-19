const app = require("../src/app");
const request = require("supertest");

describe("api /", () => {
  it("should return 405 on wrong method request", async () => {
    const res = await request(app).post("/teams").send({test:"testing bad request"});
    expect(res.statusCode).toStrictEqual(405);
  });
  it("should return 404 on wrong path", async () => {
    const res = await request(app).get("/tea")
    expect(res.statusCode).toStrictEqual(404);
  });
});

export {};
