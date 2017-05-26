def matrix_generator(n)
  size = n - 1
  array = []
  counter = 0
  0.upto(size) do |i|
    array[i] = []
    0.upto(size) do |j|
      counter += 1
      array[i][j] = counter
    end
  end

  return array
end

def transpose(matrix)
  return matrix.transpose
end

def transpose_manually(matrix)
  size = matrix.length - 1
  result = []

  0.upto(size) do |i|
    result[i] = []
    0.upto(size) do |j|
      result[i][j] = matrix[j][i]
    end
  end

  return result
end

def obtain_diagonal_lr(matrix)
  size = matrix.length - 1
  result = []

  (0..size).collect { |i| result[i] = matrix[i][i] }

  return result
end

def obtain_diagonal_lr_manually(matrix)
  size = matrix.length - 1
  result = []

  0.upto(size) do |i|
    result[i] = matrix[i][i]
  end

  return result
end

def obtain_diagonal_rl(matrix)
  size = matrix.length - 1
  row = 0
  col = size
  result = []

  0.upto(size) do |i|
    result[i] = matrix[row][col]
    row += 1
    col -= 1
  end

  return result
end

matrix = matrix_generator 2

print 'matrix_generator => '
print matrix
puts
print 'transpose => '
print transpose matrix
puts
print 'transpose_manually => '
print transpose_manually matrix
puts
print 'obtain_diagonal_lr => '
print obtain_diagonal_lr matrix
puts
print 'obtain_diagonal_lr_manually => '
print obtain_diagonal_lr matrix
puts
print 'obtain_diagonal_rl => '
print obtain_diagonal_rl matrix
