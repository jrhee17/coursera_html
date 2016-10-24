class RecipesController < ApplicationController
  def index
      search_term = params[:search]
      search_term ||= 'chocolate'
      @items = Recipe.for(search_term)
  end
end
