require 'pry'

loop do
  conversation = gets.chomp

  print "Daniel: "

  if conversation.start_with?("Bro, ")
    to_translate = conversation[5..-1].tr("aeioAEIO", "43104310").split(" ")
    puts to_translate.map { |w|
      if w[0].match(/[a-zA-Z && [^aeiouAEIOU]]/)
        w[0] = w[0].downcase
      end
      # binding.pry
      counter = 0
      w[1..-1].length.times do |i|
        if w[i + 1].match(/[a-zA-Z && [^aeiouAEIOU]]/)
          if counter == 0
            w[i + 1] = w[i + 1].upcase
          else
            w[i + 1] = w[i + 1].downcase
          end

          counter = (counter + 1) % 2
        elsif w[i + 1].match(/[0-9]/)
          counter = 1
        end
      end

      w
    }.join(" ")
  elsif conversation.empty?
    puts "Fine. Be that way!"
  elsif conversation == conversation.upcase && conversation.match(/[A-Z]/)
    puts "Woah, chill out!"
  elsif conversation.end_with?("?")
    puts "Sure."
  else
    puts "Whatever."
  end

  puts ""
end
