class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.string :species, null: false
      t.string :nickname
      t.integer :level, null: false

      t.timestamps
    end
  end
end
