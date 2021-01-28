function isMultipleOf(value: number, n: number) {
  return value % n === 0;
}

export function fizzBuzz(value: number) {
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
