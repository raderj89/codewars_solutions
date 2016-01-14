def dbl_linear(n)
  u=[1]
  (0..n*5).each { |i| u << u[i]*2 + 1 << u[i]*3 + 1}
  p u.sort
  p u.sort.uniq[n]
end

dbl_linear(10)
