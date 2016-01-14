OPPOSITES = {
  'NORTH' => 'SOUTH',
  'EAST' => 'WEST'
}

def dir_reduc(directions)
  take_out_pairs(directions, directions.length)
  directions
end

def take_out_pairs(directions, old_length, try = 0, offset = 0)
  return if directions.length == 1

  directions[offset..-1].each_slice(2).with_index do |slice, i|
    if slice.length == 2
      if cancels_out?(slice)
        directions[i * 2 + offset], directions[((i * 2) + 1) + offset] = nil
      end
    end
  end

  directions.compact!

  # We've retried and nothing happened, so we're done
  if directions.length == old_length && try.odd?
    return directions
  # Nothing changed, so try again with offset
  elsif directions.length == old_length
    take_out_pairs(directions, directions.length, try += 1, offset = 1)
  # Something changed, so try again with no offset
  elsif directions.length != old_length
    take_out_pairs(directions, directions.length, try = 0, offset = 0)
  end
end

def cancels_out?(slice)
  OPPOSITES[slice.first] == slice.last ||
  OPPOSITES[slice.last] == slice.first ||
  OPPOSITES.invert[slice.first] == slice.last ||
  OPPOSITES.invert[slice.last] == slice.first
end

# b = ["NORTH", "SOUTH", "EAST", "WEST"]
#
# puts dir_reduc(b) == []

a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
puts dir_reduc(a) == ['WEST']

u=["NORTH", "WEST", "SOUTH", "EAST"]
puts dir_reduc(u) == u
