function isMultipleOf(value, n) {
  return value % n === 0
}

function fizzBuzz(value) {
  if (isMultipleOf(value, 3) && isMultipleOf(value, 5)) {
    return 'FizzBuzz';
  }

  if (isMultipleOf(value, 3)) {
    return 'Fizz';
  }

  if (isMultipleOf(value, 5)) {
    return 'Buzz';
  }

  return value.toString();
}

module.exports = {
  fizzBuzz
}