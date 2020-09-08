import { someFunction } from "./someFunction";

describe("SomFunction()", () => {
  test("return value", () => {
    expect(someFunction()).toBe("test");
  });
});
