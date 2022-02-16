import { andMatch, andWith, orMatch, orWith } from "./common";

describe("common", () => {
  describe("andMatch", () => {
    describe("detects correct matches", () => {
      it("works with number", () => {
        expect(andMatch(5, 2 + 3, 5 + 0, 6 - 1)).toBe(true);
      });

      it("works with boolean", () => {
        expect(andMatch(true, 1 == 1, !false, !!1)).toBe(true);
      });
    });
    describe("detects incorrect matches", () => {
      it("works with number", () => {
        expect(andMatch(5, 4 + 1, 3 + 0)).toBe(false);
      });

      it("works with boolean", () => {
        expect(andMatch(true, !true, !!0)).toBe(false);
      });
    });
    describe("sensibly handles odd situations", () => {
      it("returns truthiness of self when no rights given", () => {
        expect(andMatch(5)).toBe(true);
        expect(andMatch(0)).toBe(false);
      });
    });
  });

  describe("orMatch", () => {
    describe("detects correct matches", () => {
      it("works with number", () => {
        expect(orMatch(5, 0, 0, 6 - 1)).toBe(true);
      });

      it("works with boolean", () => {
        expect(orMatch(true, false, !false)).toBe(true);
      });
    });
    describe("detects incorrect matches", () => {
      it("works with number", () => {
        expect(orMatch(5, 2, 3)).toBe(false);
      });

      it("works with boolean", () => {
        expect(orMatch(false, true, !!1)).toBe(false);
      });
    });
    describe("sensibly handles odd situations", () => {
      it("returns truthiness of self when no rights given", () => {
        expect(orMatch(5)).toBe(true);
        expect(orMatch(0)).toBe(false);
      });
    });
  });


  const greaterCompare = (l: number, r: number) => l > r;
  describe("andWith", () => {
    describe("detects correct matches", () => {
      it("works with number", () => {
        expect(andWith(10, greaterCompare, 5, 3, 9)).toBe(true);
      });
    });
    describe("detects incorrect matches", () => {
      it("works with number", () => {
        expect(andWith(5, greaterCompare, 4, 10)).toBe(false);
      });
    });
    describe("sensibly handles odd situations", () => {
      it("returns truthiness of self when no rights given", () => {
        expect(andWith(5, greaterCompare)).toBe(true);
      });
    });
  });

  describe("orWith", () => {
    describe("detects correct matches", () => {
      it("works with number", () => {
        expect(orWith(5, greaterCompare, 10, 15, 3)).toBe(true);
      });
    });
    describe("detects incorrect matches", () => {
      it("works with number", () => {
        expect(orWith(5, greaterCompare, 10, 20)).toBe(false);
      });
    });
    describe("sensibly handles odd situations", () => {
      it("returns truthiness of self when no rights given", () => {
        expect(orWith(5, greaterCompare)).toBe(true);
      });
    });
  });
});
