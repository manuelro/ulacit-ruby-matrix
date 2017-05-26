function matrixGenerator(n){
  const matrix = []
  let counter = 0;

  for (var i = 0; i < n; i++){
    matrix[i] = []
    for (var j = 0; j < n; j++)
      matrix[i][j] = ++counter
  }

  return matrix
}

function transpose(matrix){
  const copy = []

  for (var i = 0; i < matrix.length; i++){
    copy[i] = []
    for (var j = 0; j < matrix.length; j++)
      copy[i][j] = matrix[j][i]
  }

  return copy
}

function obtainDiagonalLr(matrix){
  const result = []
  for (var i = 0; i < matrix.length; i++) result.push(matrix[i][i])
  return result
}

function obtainDiagonalRl(matrix){
  const result = []
  let row = 0, col = matrix.length - 1

  for (var i = 0; i < matrix.length; i++) {
    result.push(matrix[row][col])
    row++
    col--
  }

  return result
}

const matrix = matrixGenerator(2)

console.log(matrix)
console.log(transpose(matrix))
console.log(obtainDiagonalLr(matrix))
console.log(obtainDiagonalRl(matrix))
