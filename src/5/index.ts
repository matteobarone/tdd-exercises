// Unlike an interface declaration, which always introduces a named object type,
// a type alias declaration can introduce a name for any kind of type,
// including primitive, union, and intersection types.

interface IPoint {
  x: number;
  y: number;
}

type TPoint = {
  x: number;
  y: number;
};

type Directions = 'up' | 'down' | 'left' | 'right';

// https://www.typescriptlang.org/docs/handbook/enums.html
// It is like to define a const and a type together
enum Dir {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

// the advantage of enum is that define also a type, instead in const we need to explicit
// the type of object
const DIR_CONST: {[key: string]: Directions} = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
};

const p: IPoint = { x: 1, y: 2 };
const q: TPoint = { x: 3, y: 4 };

console.log(p);
console.log(q);

function getDirection(d: Directions = Dir.DOWN): Directions {
  if (d === Dir.DOWN) {
    return Dir.DOWN;
  }

  return DIR_CONST.UP;
}

console.log(getDirection());
