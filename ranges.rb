require 'pry'

last = nil
arr = []

[1, 2, 5].each_with_object(arr) do |val, obj|
  sequence = last && (val - last == 1)

  if sequence
    obj.last.push val
  else
    obj.push [val]
  end

  last = val
end

print arr, arr.length
