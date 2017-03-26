require "pry"

class Say
  @@dictionary = {
    "0" => "zero",
    "1" => "one",
    "2" => "two",
    "3" => "three",
    "4" => "four",
    "5" => "five",
    "6" => "six",
    "7" => "seven",
    "8" => "eight",
    "9" => "nine",
    "A0" => "atta",
    "B0" => "bibbity",
    "C0" => "city",
    "D0" => "dickety",
    "E0" => "ebbity",
    "F0" => "fleventy"
  }

  def initialize(hex)
    @hex = hex
  end

  def in_hex
    octets = @hex.gsub("0x", "").scan(/.{1,2}/)

    octets.collect { |octet|
      if @@dictionary.key?(octet)
        @@dictionary[octet] + "-"
      elsif octet.length == 2
        double(octet) + " "
      else
        single(octet)
      end
    }.join("bitey ").chomp("-")
  end

  private
  def single(nibble)
    @@dictionary[nibble] || nibble.downcase + "ee"
  end

  def double(octet)
    "#{@@dictionary[octet[0] + "0"]}-#{single(octet[1])}"
  end
end

binding.pry
