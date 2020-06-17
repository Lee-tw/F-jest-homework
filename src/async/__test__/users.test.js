import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    await expect(getUsers()).resolves.toEqual({});
  });
});
