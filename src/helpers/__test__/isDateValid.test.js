import { isDateValid } from "../isDateValid";

describe("isDateValid", () => {
  it("when passed a valid instance of Date it should return true", () => {
    const validDate = new Date();

    expect(isDateValid(validDate)).toEqual(true);
  });

  it("when passed an invalid instance of Date it should return false", () => {
    const invalidDate = new Date("not valid");

    expect(isDateValid(invalidDate)).toEqual(false);
  });

  it("when passed non Date object it should return false", () => {
    const someString = "123";

    expect(isDateValid(someString)).toEqual(false);
  });
});
