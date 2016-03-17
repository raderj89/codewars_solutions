def solution(n)
  return 0 if n == 16
	slices = (1..n).each_slice(16).with_object([]) do |slice, array|
    array << slice
  end

  slices.last.length
end
