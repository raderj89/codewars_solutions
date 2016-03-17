# Description:

# Complete the squareSum method so that it squares each number passed into it and then sums the results together.

# For example:

# square_sum([1,2, 2]) # should return 9

def square_sum(array)
  array.map { |x| x *= x }.inject(:+)
end