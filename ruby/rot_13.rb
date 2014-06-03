# Description:

# ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

# Create a method that takes a string as an argument and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet are used in the test cases, and only these should be shifted, like in the original Rot13 "implementation".

def rot13(string)
  cipher = Hash[('A'..'Z').to_a.rotate(13).zip(('A'..'Z').map)].merge(Hash[('a'..'z').to_a.rotate(13).zip(('a'..'z').map)])
  new_str = ""
  string.chars do |c|
    if c =~ /[a-zA-Z]/
      new_str << cipher[c]
    else
      new_str << c
    end
  end
  new_str
end