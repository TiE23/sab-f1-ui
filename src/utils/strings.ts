/**
 * Gives you the number of characters that prefix all the given strings.
 * I use this to remove redundant repeated characters shared between file names.
 * Basically, this is a method to do the " you find in a list.
 * @param strings
 * @returns number of characters that all strings share from the start
 */
export function findPrefixCount(strings: Array<string>, caseSensitive = true): number {
  if (strings.length <= 1) {
    return 0; // Cannot find anything. So, most neutral return is 0.
  }

  let maskLength = strings[0].length;
  for (let x = 1; x < strings.length; ++x) {
    for (let c = 0; c < maskLength; c++) {
      const left = caseSensitive ? strings[0][c] : strings[0][c].toLowerCase();
      const right = caseSensitive ? strings[x][c] : strings[x][c].toLowerCase();
      if (left !== right) {
        maskLength = c;
        break;
      }
    }
  }
  return maskLength;
}

/**
 * Basic function repeats the given string a set number of times and allows for
 * a delimiter.
 * @param value the string to repeat
 * @param count the number of times to repeat
 * @param delimiter the string to place between repeated strings
 * @returns
 */
export function repeater(value: string, count: number, delimiter = ", "): string {
  let output = "";
  for (let x = 0; x < count; ++x) {
    output += value;
    if (delimiter.length !== 0 && x < count - 1) {
      output += delimiter;
    }
  }
  return output;
}
