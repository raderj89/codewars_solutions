# Description:

# This time we want to write calculations using functions and get the results. Let's have a look at some examples:

# seven(times(five)) # must return 35
# four(plus(nine)) # must return 13
# eight(minus(three)) # must return 5
# six(divided_by(two)) # must return 3
# Requirements:

# There must be a function for each number from 0 ("zero") to 9 ("nine")
# There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
# Each calculation consist of exactly one operation and two numbers

# The most outer function represents the left operand, the most inner function represents the right operand

# FIRST SOLUTION
# wrote blog post about this solution: http://www.jaredrader.com/blog/2014/09/24/verbal-math-in-ruby/

OPERATORS = {
  plus:       :+,
  minus:      :-,
  times:      :*,
  divided_by: :/
}

NUMBERS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9
}

OPERATORS.each do |word, op|
  define_method(word) do |number|
    return op, number
  end
end

NUMBERS.each do |word, num|
  define_method(word) do |word_operator = nil|
    if word_operator
      operator, number = word_operator
      num.send(operator, number * 1.0)
    else
      num
    end
  end
end

# SECOND SOLUTION
# wrote blog post about this solution: http://www.jaredrader.com/blog/2014/10/05/a-functional-approach-to-verbal-math-in-ruby/

%w(zero one two three four five six seven eight nine).each_with_index do |num, index|
  define_method(num) do |op_method = nil|
    op_method ? op_method.call(index) : index
  end
end

%w(plus + minus - times * divided_by /).each_slice(2) do |word_op|
  word, op = word_op

  define_method(word) do |amount|
    Proc.new { |x| x.send(op, amount * 1.0) }
  end
end