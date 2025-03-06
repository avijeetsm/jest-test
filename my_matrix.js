module.exports.MyMatrix = class MyMatrix {
  get rows() {
    return this.matrix.length;
  }

  get cols() {
    return this.matrix[0].length;
  }

  static randomMatrix(rows, cols, maxValue = 10) {
    let result = new MyMatrix(rows, cols);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        result.matrix[i][j] = Math.floor(Math.random() * (maxValue + 1));
      }
    }

    return result;
  }

  constructor(rows, cols) {
    this.matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  }

  multiplyBy(other) {
    let resultRows = this.matrix.length;
    let resultCols = other.matrix[0].length;
    let result = new MyMatrix(resultRows, resultCols);

    for (let i = 0; i < resultRows; i++) {
      for (let j = 0; j < resultCols; j++) {
        result.matrix[i][j] = this.scalarMultiply(i, other, j);
      }
    }

    return result;
  }

  scalarMultiply(row, other, col) {
    let result = 0;

    for (let k = 0; k < this.matrix[0].length; k++) {
      result += this.matrix[row][k] * other.matrix[k][col];
    }

    return result;
  }

  toString() {
    return JSON.stringify(this.matrix).replaceAll("],", "],\n");
  }
};
