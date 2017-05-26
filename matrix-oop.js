class Matrix{
  constructor(size){
    this.size = size
    this.matrix = []
    this.counter = 0
  }

  generate(){
    for (var i = 0; i < this.size; i++){
      this.matrix[i] = []
      for (var j = 0; j < this.size; j++)
        this.matrix[i][j] = ++this.counter
    }

    return this.matrix
  }
}

class MatrixPlayground{
  constructor(matrix){
    this.matrix = matrix;
    this.result = []
  }
}

class Transpositioner extends MatrixPlayground{
  transpose(){
    for (var i = 0; i < this.matrix.length; i++){
      this.result[i] = []
      for (var j = 0; j < this.matrix.length; j++)
        this.result[i][j] = this.matrix[j][i]
    }
    return this.result
  }
}

class LtrMatrixGetter extends MatrixPlayground{
  obtain(){
    for (var i = 0; i < this.matrix.length; i++) this.result.push(matrix[i][i])
    return this.result
  }
}

class RtlMatrixGetter extends MatrixPlayground{
  constructor(matrix){
    super(matrix)
    this.row = 0
    this.col = matrix.length - 1
  }

  obtain(){
    for (var i = 0; i < this.matrix.length; i++) {
      this.result.push(this.matrix[this.row][this.col])
      this.row++
      this.col--
    }
    return this.result
  }
}

const matrix = new Matrix(2).generate()
const transposedMatrix = new Transpositioner(matrix).transpose()
const ltrDiagonal = new LtrMatrixGetter(matrix).obtain()
const rtlDiagonal = new RtlMatrixGetter(matrix).obtain()

console.log(matrix)
console.log(transposedMatrix)
console.log(ltrDiagonal)
console.log(rtlDiagonal)
