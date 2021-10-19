const app = require("../src/app");
const request = require("supertest");

describe("api /teams", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/teams");
    expect(res.statusCode).toStrictEqual(200);
  });
});

export {};
