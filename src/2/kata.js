function add(numbers = '') {
  if (!numbers) {
    return 0;
  }

  let delimiter = ',';
  const hasCustomDelimiter = numbers.substr(0, 2) === '//';

  if (hasCustomDelimiter) {
    const hasLongCustomDelimiter = numbers[2] === '[';

    delimiter = hasLongCustomDelimiter
      ? numbers.match(/(?<=\[)(.*?)(?=\])/g)[0]
      : numbers[2];

    numbers = hasLongCustomDelimiter 
      ? numbers.substr(6 + delimiter.length - 1, numbers.length)
      : numbers.substr(4, numbers.length)
  }

  const splitted = numbers.split('\n').join(delimiter).split(delimiter);
  
  const negativeNumbers = splitted.filter((el) => el < 0);

  if (negativeNumbers.length) {
    throw new TypeError(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
  }

  return splitted
    .filter(el => el <= 1000)
    .reduce((acc, strNum) => acc + parseInt(strNum), 0)
}

module.exports = {
  add
}