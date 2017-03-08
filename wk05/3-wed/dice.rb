require 'pry'

class Dice
  def self.roll(num_rolls = 1)
    new([*1..num_rolls].collect { rand(1..6) })
  end

  def initialize(rolls)
    @rolls = rolls
    puts self
  end

  def sum
    [@rolls, @rolls.reduce(:+)]
  end

  def to_s
    "#{@rolls.collect { |r| stringify(r) }.join("\n")}"
  end

  private
  def stringify(roll)
    "#{roll}\n" +
    "---------\n" +
    "| #{mark_if(roll > 1)}   #{mark_if(roll > 3)} |\n" +
    "| #{mark_if(roll > 5)} #{mark_if(roll.odd?)} #{mark_if(roll > 5)} |\n" +
    "| #{mark_if(roll > 3)}   #{mark_if(roll > 1)} |\n" +
    "---------"
  end

  private
  def mark_if(condition)
    if condition then "*" else " " end
  end
end

binding.pry
