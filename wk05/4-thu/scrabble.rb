require 'pry'

class Scrabble
  @@letters = [*"A".."Z"]
  @@values = [1, 3, 3, 2, 1, 4, 2, 1, 4, 2, 4, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]
  @@letter_values = @@letters.zip(@@values).to_h

  @@num_of_tiles = 255
  @@num_of_double_letter_tiles = 24
  @@num_of_triple_letter_tiles = 12
  @@num_of_double_word_tiles = 17
  @@num_of_triple_word_tiles = 8

  def self.score(word)
    possible_bonus_tiles = word.length

    sum = word.split("").map { |c|
      value = @@letter_values[c.upcase]
      chance = rand

      if chance <= @@num_of_double_letter_tiles.to_f / @@num_of_tiles
        puts "'#{c}' is on a double-letter tile!"
        possible_bonus_tiles -= 1
        double(value)
      elsif chance <= @@num_of_triple_letter_tiles.to_f / @@num_of_tiles
        puts "'#{c}' is on a triple-letter tile!"
        possible_bonus_tiles -= 1
        triple(value)
      else
        value
      end
    }.reduce(:+)

    possible_bonus_tiles.times do
      chance = rand

      if chance <= @@num_of_double_word_tiles.to_f / @@num_of_tiles
        puts "'#{word}' is on a double-word tile!"
        sum = double(sum)
      elsif chance <= @@num_of_triple_word_tiles.to_f / @@num_of_tiles
        puts "'#{word}' is on a triple-word tile!"
        sum = triple(sum)
      end
    end

    sum
  end

  def self.double(value)
    value * 2
  end

  def self.triple(value)
    value * 3
  end

  private_class_method :double, :triple
end

binding.pry
