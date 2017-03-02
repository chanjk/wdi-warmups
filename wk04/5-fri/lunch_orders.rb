order_data = []

def to_sentence(array)
  if array.length == 1
    "#{ array.first == "" ? "nothing" : "a #{ array.first }" }"
  else
    "a #{ array[0..-2].join(", ") } & #{ array.last }"
  end
end

loop do
  puts "Name for order:"

  order_data << { name: gets.chomp, orders: [] }
  puts

  loop do
    puts "#{ order_data.last[:name] } wants to order:"

    order_data.last[:orders] << gets.chomp
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
puts order_data.map { |order| "#{ order[:name] } ordered #{ to_sentence(order[:orders]) }" }.join("\n")
