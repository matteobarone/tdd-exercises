function add(numbers = '') {
  if (!numbers) {
    return 0;
  }

  return numbers.split(',').reduce((acc, strNum) => acc + parseInt(strNum), 0)
}

module.exports = {
  add
}