export function add(numbers = '') {
  if (!numbers) {
    return 0;
  }

  let internalNumbers = numbers;

  const BASE_DELIMITER = ',';
  let delimiterArray = [BASE_DELIMITER];
  const hasCustomDelimiter = internalNumbers.substr(0, 2) === '//';

  if (hasCustomDelimiter) {
    const hasLongCustomDelimiter = internalNumbers[2] === '[';

    delimiterArray = hasLongCustomDelimiter
      ? internalNumbers.match(/(?<=\[)(.*?)(?=\])/g)!
      : [numbers[2]];

    const firstOccurranceOfNewLine = internalNumbers.indexOf('\n');

    internalNumbers = internalNumbers.substr(firstOccurranceOfNewLine + 1, internalNumbers.length);
  }

  internalNumbers = internalNumbers.split('\n').join(delimiterArray[0]);

  delimiterArray.forEach((el) => {
    internalNumbers = internalNumbers.split(el).join(BASE_DELIMITER);
  });

  const negativeNumbers = internalNumbers
    .split(BASE_DELIMITER)
    .filter((el) => parseInt(el, 10) < 0);

  if (negativeNumbers.length) {
    throw new TypeError(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
  }

  return internalNumbers
    .split(BASE_DELIMITER)
    .filter((el) => parseInt(el, 10) <= 1000)
    .reduce((acc, strNum) => acc + parseInt(strNum, 10), 0);
}
