import { findPrefixCount, repeater } from "./strings";

describe("strings", () => {
  describe("findPrefixCount", () => {
    describe("finds matches", () => {
      it("gets correct count all the same", () => {
        expect(findPrefixCount([
          "hello",
          "hello",
          "hello",
          "hello",
        ], true)).toBe(5);
      });
      it("gets correct count for hello prefix", () => {
        expect(findPrefixCount([
          "hello world",
          "hello mother",
          "hello father",
          "hello!",
        ], true)).toBe(5);
      });
      it("gets zero when nothing matches", () => {
        expect(findPrefixCount([
          "cat",
          "dog",
          "rat",
        ], true)).toBe(0);
      });
      it("returns 0 when only given a single string", () => {
        expect(findPrefixCount([
          "by myself",
        ], true)).toBe(0);
      });
      it("returns 0 when given no strings", () => {
        expect(findPrefixCount([], true)).toBe(0);
      });
      it("is case sensitive", () => {
        expect(findPrefixCount([
          "Hello",
          "HELLO",
          "Hello",
        ], true)).toBe(1);
      });
      it("is case-insensitive", () => {
        expect(findPrefixCount([
          "Hello",
          "HELLO",
          "Hello",
        ], false)).toBe(5);
      });
    });
  });

  describe("repeater", () => {
    describe("repeats correctly", () => {
      it("repeats 1 time", () => {
        expect(repeater(
          "A",
          1,
          ",",
        )).toBe("A");
      });
      it("repeats 3 times", () => {
        expect(repeater(
          "A",
          3,
          ",",
        )).toBe("A,A,A");
      });
      it("correctly handles 0", () => {
        expect(repeater(
          "A",
          0,
          ",",
        )).toBe("");
      });
      it("correctly handles -1", () => {
        expect(repeater(
          "A",
          -1,
          ",",
        )).toBe("");
      });
      it("correctly handles blank delimiter", () => {
        expect(repeater(
          "A",
          3,
          "",
        )).toBe("AAA");
      });
      it("correctly handles different delimiter", () => {
        expect(repeater(
          "A",
          3,
          " + ",
        )).toBe("A + A + A");
      });
    });
  });
});
