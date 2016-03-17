def sum_dig_pow(a, b)
  (a..b).to_a.each_with_object([]) do |n, num_array|
    str_num_array = n.to_s.split('')

    summed_num = str_num_array.map.with_index do |digit, i|
      pow = i + 1
      digit ** i
    end.inject(:+)

    num_array << n if summed_num == n
  end
end
