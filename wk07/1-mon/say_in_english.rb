require 'pry'

class Say
  @@num_to_english = {
    0 => "zero",
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four",
    5 => "five",
    6 => "six",
    7 => "seven",
    8 => "eight",
    9 => "nine",
    10 => "ten",
    11 => "eleven",
    12 => "twelve",
    13 => "thirteen",
    15 => "fifteen",
    18 => "eighteen",
    20 => "twenty",
    30 => "thirty",
    40 => "forty",
    50 => "fifty",
    80 => "eighty"
  }

  def initialize(num)
    @num = num
  end

  def in_english
    raise ArgumentError, "Number must be between 0 and 99, inclusive." unless @num.between?(0, 99)

    if @@num_to_english.key?(@num)
      @@num_to_english[@num]
    elsif @num / 10 == 1
      "#{@@num_to_english[@num % 10]}teen"
    else
      "#{@@num_to_english[@num / 10 * 10] || "#{@@num_to_english[@num / 10]}ty"}-#{@@num_to_english[@num % 10]}"
    end
  end
end

[22, 0, 12, 14, 5, 18, 50, 88, 98, -1, 100].each do |num|
  print "#{num}: "
  begin
    puts Say.new(num).in_english
  rescue => e
    puts e.message
  end
end
