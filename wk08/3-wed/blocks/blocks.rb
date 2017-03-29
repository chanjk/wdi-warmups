require 'pry'

@blocks = [["B","O"],
          ["X","K"],
          ["D","Q"],
          ["C","P"],
          ["N","A"],
          ["G","T"],
          ["R","E"],
          ["T","G"],
          ["Q","D"],
          ["F","S"],
          ["J","W"],
          ["H","U"],
          ["V","I"],
          ["A","N"],
          ["E","R"],
          ["F","S"],
          ["L","Y"],
          ["P","C"],
          ["Z","M"],]

def can_make_word(word)
  blocks = @blocks[0..-1]

  word.split("").each do |c|
    block_idx = blocks.index { |b| b.include? c.upcase }

    return false if block_idx.nil?

    blocks.delete_at(block_idx)
  end

  true
end

# binding.pry

possible_words = []

ARGF.readlines.each do |line|
  word, expected = line.chomp.split(",").map(&:strip)

  expected = if expected == "true" then true elsif expected == "false" then false end
  actual = can_make_word(word)

  possible_words << word if actual

  print "#{word}: "

  if can_make_word(word) == expected
    puts "PASS"
  else
    puts "FAIL"
  end
end

puts possible_words.sort { |x, y| x.length <=> y.length }
