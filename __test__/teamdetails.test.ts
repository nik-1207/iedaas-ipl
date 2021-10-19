const app = require("../src/app");
const request = require("supertest");

describe("api /chennai-super-kings", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/teams/chennai-super-kings");
    expect(res.statusCode).toStrictEqual(200);
  });
  it("should return 404 on wrong url", async () => {
    const res = await request(app).get("/teams/chennai-kings");
    expect(res.statusCode).toStrictEqual(404);
  });
});

export {};
