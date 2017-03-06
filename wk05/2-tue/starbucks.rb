require 'pry'

class Coffee
  @@all_consonants_upcase = [*"A".."Z"].select { |c| c =~ /[^AEIOU]/ }
  @@all_consonants_downcase = [*"a".."z"].select { |c| c =~ /[^aeiou]/ }
  @@all_vowels_upcase = %w(A E I O U)
  @@all_vowels_downcase = %w(a e i o u)

  attr_accessor :collected

  def initialize(drink, sugars, size, order_name, *options)
    @drink = drink
    @sugars = sugars
    @size = size
    @order_name = misspell(order_name)
    @options = options
    @ready_time = Time.now + rand(120..300)
    @collected = false
  end

  def ready?
    "#{to_s} #{Time.now >= @ready_time ? "Ready" : "Not ready"}"
  end

  def to_s
    "#{@order_name}'s #{@drink}, #{@size}, #{@sugars}#{", #{@options.join(", ")}" if !@options.empty?}."
  end

  private
  def misspell(name)
    name.split("").collect { |c|
      if rand < 0.6
        c
      elsif @@all_consonants_upcase.include? c
        @@all_consonants_upcase.sample
      elsif @@all_consonants_downcase.include? c
        @@all_consonants_downcase.sample
      elsif @@all_vowels_upcase.include? c
        @@all_vowels_upcase.sample
      else
        @@all_vowels_downcase.sample
      end
    }.join
  end
end

@all_coffees = []

def make(coffee)
  @all_coffees << coffee
end

def uncollected_coffees
  @all_coffees.select { |c| !c.collected }
end

binding.pry
