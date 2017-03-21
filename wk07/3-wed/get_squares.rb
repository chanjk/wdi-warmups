require "pry"

def get_squares(nums)
  nums.select { |num| Math.sqrt(num) % 1 == 0 }.uniq.sort
end

binding.pry
