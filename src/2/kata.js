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

  const withoutNewLines = numbers.replace(/\n/g, delimiter);

  return withoutNewLines
    .split(delimiter)
    .reduce((acc, strNum) => acc + parseInt(strNum), 0)
}

module.exports = {
  add
}