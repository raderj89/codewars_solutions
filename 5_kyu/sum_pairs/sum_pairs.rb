def sum_pairs(ints, s)
  left_indices = []
  right_indices = []

  ints.each_with_index do |int, i|
    # we've reached the end
    break if i == ints.length - 1

    next_idx = i + 1

    # the current int and its neighbor == sum
    return [int, ints[next_idx]] if int + ints[next_idx] == s

    later_idx = next_idx + 1

    ints[later_idx..-1].each_with_index do |later_int, j|
      if int + later_int == s
        left_indices << i
        right_indices << (j + later_idx)
      end
    end
  end

  return if left_indices.empty? && right_indices.empty?

  min_right_index = right_indices.min
  left_index = left_indices[right_indices.index(min_right_index)]

  return [ints[left_index], ints[min_right_index]]
end

# p sum_pairs([1,3,1], 2)
# p sum_pairs([1, -2, 3, 0, -6, 1], -6)
# p sum_pairs([20, -13, 40], -7)
p sum_pairs([1, 2, 3, 4, 1, 0], 2)
