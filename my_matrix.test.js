const matrix = require("./my_matrix");

let a = matrix.MyMatrix.randomMatrix(50, 100, 25);
let b = matrix.MyMatrix.randomMatrix(100, 60, 25);

test("test My Matrix", () => {
  let c = a.multiplyBy(b);
  expect(c.rows).toBe(a.rows);
  expect(c.cols).toBe(b.cols);
});

it("test My Matrix", () => {
  let c = a.multiplyBy(b);
  expect(c.rows).toBe(a.rows);
  expect(c.cols).toBe(b.cols);
});
