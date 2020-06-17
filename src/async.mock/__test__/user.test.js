import { register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    const username = "mock username";
    const password = "mock password";

    const result = register(username, password);
    await expect(result).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    const username = "mock username";
    const password = "mock password";

    verifyPassword.mockImplementation(() => false);

    const result = register(username, password);
    await expect(result).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
