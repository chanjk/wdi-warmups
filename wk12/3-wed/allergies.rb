require 'pry'

class Allergies
  @@all_allergies = %w(eggs peanuts shellfish strawberries tomatoes chocolate pollen cats)
                      .map.with_index { |a, i| [a, 2 ** i] }.reverse.to_h

  def initialize(score)
    @score = score
    @allergies = get_allergies(score)
  end

  def list
    @allergies
  end

  def allergic_to?(item)
    @allergies.include?(item)
  end

  private

  def get_allergies(score)
    allergies = []

    @@all_allergies.each do |allergy, value|
      if score >= value # could also use score & value > 0, without reducing score
        allergies.unshift(allergy)
        score -= value
      end
    end

    allergies
  end
end

allergies = Allergies.new(34)
puts allergies.allergic_to?('chocolate')
puts allergies.allergic_to?('cats')
puts allergies.list

binding.pry
