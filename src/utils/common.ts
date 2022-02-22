
/**
 * Helpful utility function to save on ugly looking chains of && checks.
 * Before: (myObj.modeA === MyModes.On && myObj.modeB === MyModes.On)
 * After: andMatch(MyModes.On, myObj.modeA, myObj.modeB)
 * Uses strict equals.
 * @param left The argument you're checking.
 * @param rights n arguments you're checking against.
 * @returns True if all match. If no rights given returns truthiness of left.
 */
export function andMatch<T>(left: T, ...rights: T[]): boolean {
  if (rights.length === 0) {
    return !!left;
  }

  for (const right of rights) {
    if (left !== right) {
      return false;
    }
  }
  return true;
}

/**
 * Helpful utility function to save on ugly looking chains of || checks.
 * @param left The argument you're checking.
 * @param rights n arguments you're checking against.
 * @returns True if any match. If no rights given returns truthiness of left.
 */
export function orMatch<T>(left: T, ...rights: T[]): boolean {
  if (rights.length === 0) {
    return !!left;
  }

  for (const right of rights) {
    if (left === right) {
      return true;
    }
  }
  return false;
}

/**
 * Helpful function that essentially repackages the functionality of Array.every()
 * into a slightly more sensible form.
 * @param left The argument you're checking.
 * @param func Predicate that returns a boolean.
 * @param rights n arguments you're checking against.
 * @returns True if all match. If no rights given returns truthiness of left.
 */
export function andWith<T>(
  left: T,
  func: (l: T, r: T) => boolean,
  ...rights: T[]
): boolean {
  if (rights.length === 0) {
    return !!left;
  }

  for (const right of rights) {
    if (!func(left, right)) {
      return false;
    }
  }
  return true;
}

/**
 * Helpful function that essentially repackages the functionality of Array.some()
 * into a slightly more sensible form.
 * @param left The argument you're checking.
 * @param func Predicate that returns a boolean.
 * @param rights n arguments you're checking against.
 * @returns True if any match. If no rights given returns truthiness of left.
 */
export function orWith<T>(
  left: T,
  func: (l: T, r: T) => boolean,
  ...rights: T[]
): boolean {
  if (rights.length === 0) {
    return !!left;
  }

  for (const right of rights) {
    if (func(left, right)) {
      return true;
    }
  }
  return false;
}
