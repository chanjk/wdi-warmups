require 'pry'

class Allergies
  @@all_allergies = %w(eggs peanuts shellfish strawberries tomatoes chocolate pollen cats)
                      .map.with_index { |a, i| [a, 2 ** i] }.to_h

  def initialize(score)
    @allergies = @@all_allergies.select { |a, v| score & v > 0 }.keys
  end

  def list
    @allergies
  end

  def allergic_to?(item)
    @allergies.include?(item)
  end
end

allergies = Allergies.new(34)
puts allergies.allergic_to?('chocolate')
puts allergies.allergic_to?('cats')
puts allergies.list

binding.pry
