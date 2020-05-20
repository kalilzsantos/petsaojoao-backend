import request from "supertest";
import server from "../server";

afterAll(() => {
  server.close();
});

describe("initial tests", () => {
  test("api route", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
  });
});
