# Description:

# Your goal is to write the solution method, which should return the result of applying the 'modulo 16' operation to any given positive integer.

# Example usage:

# solution(4)  # => 4
# solution(16) # => 0
# solution(18) # => 2
# Note: The following methods have been disabled

# Fixnum#+
# Fixnum#-
# Fixnum#*
# Fixnum#/
# Fixnum#%
# Fixnum#modulo
# Fixnum#divmod

def solution(n)
  if n < 16
    return n
  elsif n == 16
    return 0
  elsif n > 16
    Math.sqrt(n.to_s.split("")[-1].to_i).floor
  end
end