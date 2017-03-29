class PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def new
  end

  def create
    pokemon = Pokemon.new(species: params[:species], nickname: params[:nickname], level: params[:level])

    if pokemon.save
      redirect_to '/'
    else
      render :new
    end
  end
end
