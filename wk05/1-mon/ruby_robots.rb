require 'pry'

class Robot
  attr_reader :instruction_count

  @@current_names = []
  @@current_mac_addresses = []
  @@all_letters = [*"A".."Z"]
  @@all_numbers = [*"0".."9"]

  def initialize
    @name = generate_unique_name
    @mac_address = generate_unique_mac_address
    @instruction_count = 0
    @creation_time = Time.now
    @boot_time = @creation_time

    TracePoint.trace(:call) do |t|
      @instruction_count += 1 if (t.defined_class == self.class and self.class.instance_methods(false).include?(t.method_id))
    end
  end

  def name
    @name
  end

  def reset
    old_name = @name
    @name = generate_unique_name
    @@current_names.delete(old_name)

    @boot_time = Time.now

    self
  end

  def timers
    "#{seconds_since(@boot_time)} seconds since last boot, #{seconds_since(@creation_time)} seconds since creation"
  end

  private
  def generate_unique_name
    name = ""
    loop do
      name = "#{(@@all_letters.sample(2) + @@all_numbers.sample(3)).join}"
      break if (!@@current_names.include?(name))
    end
    @@current_names << name
    name
  end

  private
  def generate_unique_mac_address
    mac_address = ""
    loop do
      mac_address = "#{@@all_numbers.sample(12).join}"
      break if (!@@current_mac_addresses.include?(mac_address))
    end
    @@current_mac_addresses << mac_address
    mac_address
  end

  private
  def seconds_since(time)
    (Time.now - time).to_i
  end
end

binding.pry
