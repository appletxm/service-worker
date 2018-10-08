var a = 1,
    b = 2,
    c = 3;

console.info(a, b, c);

var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

var loc = node.loc,
    start = node.loc.start,
    line = node.loc.start.line;

console.info(line, loc, start);

export default {
  a: a, b: b, c: c
};