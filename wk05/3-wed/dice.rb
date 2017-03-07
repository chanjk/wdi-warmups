require 'pry'

class Dice
  def self.roll(num_rolls = 1)
    rolls = [*1..num_rolls].collect { rand(1..6) }

    if rolls.length > 1 then puts rolls.collect { |r| stringify(r) } else puts stringify(rolls.first) end
  end

  private
  def self.stringify(roll)
    "#{roll}\n" +
    "---------\n" +
    "| #{mark_if(roll > 1)}   #{mark_if(roll > 3)} |\n" +
    "| #{mark_if(roll > 5)} #{mark_if(roll.odd?)} #{mark_if(roll > 5)} |\n" +
    "| #{mark_if(roll > 3)}   #{mark_if(roll > 1)} |\n" +
    "---------"
  end

  private
  def self.mark_if(condition)
    if condition then "*" else " " end
  end
end

class Array
  def sum
    [self, self.reduce(:+)]
  end
end

binding.pry
