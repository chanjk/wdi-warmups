def to_sentence(array)
  if array.length == 1
    "#{ array.first == "" ? "nothing" : "a #{ array.first }" }"
  else
    "a #{ array[0..-2].join(", ") } & #{ array.last }"
  end
end

class Order
  attr_reader :name

  def initialize(name)
    @name = name
    @orders = []
  end

  def add_order(order)
    @orders << order
  end

  def to_s
    "#{ @name } ordered #{ to_sentence(@orders) }"
  end
end

order_data = []

loop do
  puts "Name for order:"

  order_data << Order.new(gets.chomp)
  puts

  loop do
    puts "#{ order_data.last.name } wants to order:"

    order_data.last.add_order(gets.chomp)
    puts

    puts "Add another item to the order? (y/n)"

    break if gets.chomp.downcase != "y"

    puts
  end

  puts
  puts "Add another name to the order? (y/n)"

  break if gets.chomp.downcase != "y"

  puts
end

puts
puts "All orders:"
puts order_data.join("\n")
