require 'pry'

class Card
  def initialize(value, suite)
    @value = value
    @suite = suite
  end

  def to_s
    "#{@value} of #{@suite}"
  end
end

class Deck
  def initialize
    suites = %w(Diamonds Clubs Hearts Spades)
    values = [*2..10] + %w(Jack Queen King Ace)

    @cards = values.flat_map { |value| suites.map { |suite| Card.new(value, suite) } }.shuffle
  end

  def deal(num_cards = 1)
    @cards.shift(num_cards)
  end
end

num_players = 0

loop do
  print "How many players (2 - 8)? "

  num_players = gets.chomp.to_i

  break if num_players.between?(2, 8)

  puts "Please enter a valid number of players."
end

deck = Deck.new
my_hand = deck.deal(2)
cpu_hands = Array.new(num_players - 1).map { deck.deal(2) }

deck.deal
flop = deck.deal(3)

deck.deal
turn = deck.deal(1)

deck.deal
river = deck.deal(1)

puts "Your hand: #{my_hand.join(", ")}"

cpu_hands.each_with_index do |cpu, i|
  puts "CPU #{i + 1} hand: #{cpu.join(", ")}"
end

puts "Flop: #{flop.join(", ")}"
puts "Turn: #{turn.join(", ")}"
puts "River: #{river.join(", ")}"

# binding.pry
