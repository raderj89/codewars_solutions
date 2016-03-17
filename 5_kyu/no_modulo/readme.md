# No Modulo

## Description

Your goal is to write the solution method, which should return the result of applying the `modulo 16` operation to any given positive integer.

Example usage:

```ruby
solution(4)  # => 4
solution(16) # => 0
solution(18) # => 2
```
Note: The following methods (among many others) have been disabled:

```
Fixnum#+
Fixnum#-
Fixnum#*
Fixnum#/
Fixnum#%
Fixnum#divmod
Fixnum#fdiv
Fixnum#modulo
Fixnum#to_f
Fixnum#to_s
```

## My Solution

```ruby
def solution(n)
  return 0 if n == 16
	slices = (1..n).each_slice(16).with_object([]) do |slice, array|
    array << slice
  end

  slices.last.length
end
```

To solve this, I create a range from 1 to `n`, then call Ruby's `Enumerator#each_slice` method, passing 16 as the number of elements I want to slice from the resulting array.

I also use `Enumerator#with_object` so I can store all resulting arrays in an array and use that to figure out the modulo value.

If `n == 16`, I know I can immediately return 0.

To get the value of `n % 16` for any other number, I store each slice into an array and return `slices.last.length` to get the value of `n % 16`.

This works because of how `each_slice` returns arrays. If `n` is less than 16, e.g. `n == 15`, `each_slice(16)` will conveniently still grab all the elements in the array, resulting in an array of length 15. `slices` will be an array of only one element in this case, so returning `slices.last.length` returns 15. `15 % 16 == 15`.

If `n` is greater than 16, e.g. `n == 18`, then `each_slice(16)` will generate two arrays: the first being an array of numbers 1 to 16, the last being an array of `[17, 18]`. The length of this array is the remainder, 2, which equals `18 % 16`.

## Other solutions

The highest-voted solution was a really interesting one-liner:

```ruby
def solution(n)
  n & 15
end
```

`&` is a bitwise operator that "walks through the binary representation of two supplied integers bit by bit.  If the bits at the same position in both integers are 1 the resulting integer will have that bit set to 1. If not, the bit will be set to 0" ([Calle Erlandsson](http://www.calleerlandsson.com/2014/02/06/rubys-bitwise-operators/)). So if `n == 18`, `18 & 15` would be `10010 & 1111 == 00010`, which is the binary representation of 2, and the correct result of `18 % 16`.
