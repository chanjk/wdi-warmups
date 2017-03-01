require 'pry'

lines = ARGF.file.readlines.drop 1
scrubbed_array = lines.map { |line| line.chomp.split(',').map(&:strip) }

headers = %i(product unitPrice units totalPrice)
formatted_array = scrubbed_array.map { |line|
  total_price = "%.2f" % (line[-1].to_f * line[-2].to_f)
  line_with_total_price = line + [total_price]
  { line_with_total_price.first => [headers.zip(line_with_total_price.drop(1)).to_h] }
}

formatted_hash = formatted_array.reduce { |x, y|
  x.merge(y) { |key, oldval, newval|
    oldval.concat(newval)
  }
}

binding.pry
