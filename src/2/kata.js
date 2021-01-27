function add(numbers = '') {
  if (!numbers) {
    return 0;
  }

  const BASE_DELIMITER = ',';
  let delimiterArray = [BASE_DELIMITER];
  const hasCustomDelimiter = numbers.substr(0, 2) === '//';

  if (hasCustomDelimiter) {
    const hasLongCustomDelimiter = numbers[2] === '[';

    delimiterArray = hasLongCustomDelimiter
      ? numbers.match(/(?<=\[)(.*?)(?=\])/g)
      : [numbers[2]];

    const firstOccurranceOfNewLine = numbers.indexOf('\n');

    numbers = numbers.substr(firstOccurranceOfNewLine + 1, numbers.length);
  }

  numbers = numbers.split('\n').join(delimiterArray[0]);

  delimiterArray.forEach(element => {
    numbers = numbers.split(element).join(BASE_DELIMITER)
  });

  numbers = numbers.split(BASE_DELIMITER);
  
  const negativeNumbers = numbers.filter((el) => el < 0);

  if (negativeNumbers.length) {
    throw new TypeError(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
  }

  return numbers
    .filter(el => el <= 1000)
    .reduce((acc, strNum) => acc + parseInt(strNum), 0)
}

module.exports = {
  add
}