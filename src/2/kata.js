function add(numbers = '') {
  if (!numbers) {
    return 0;
  }

  let delimiter = ',';
  const hasCustomDelimiter = numbers.substr(0, 2) === '//';

  if (hasCustomDelimiter) {
    delimiter = numbers[2];
    numbers = numbers.substr(4, numbers.length);
  }

  const splitted = numbers.replace(/\n/g, delimiter).split(delimiter);
  
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