require 'pry'

@letter_weights = [*"A".."Z"].zip([*1..26]).to_h

def balance(word)
  word = word.upcase
  chars = word.split("")
  numer = chars.each_with_index.reduce(0) { |z, p| z + @letter_weights[p.first] * p.last }
  denom = chars.reduce(0) { |z, e| z + @letter_weights[e] }

  fulcrum_index = numer.to_f / denom

  if fulcrum_index % 1 == 0
    side_moment = chars[0..fulcrum_index - 1].each_with_index.reduce(0) { |z, p| z + @letter_weights[p.first] * (fulcrum_index - p.last) }.to_i
    "#{word[0..fulcrum_index - 1]} #{word[fulcrum_index]} #{word[fulcrum_index + 1..-1]} - #{side_moment}"
  else
    "#{word} DOES NOT BALANCE"
  end
end

words = %w(STEAD CONSUBSTANTIATION WRONGHEADED UNINTELLIGIBILITY SUPERGLUE)

words.each do |word|
  puts balance(word)
end

# binding.pry
