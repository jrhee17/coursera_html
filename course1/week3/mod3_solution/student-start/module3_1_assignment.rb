require 'httparty'

class Recipe
    include HTTParty
    base_uri 'http://food2fork.com/api'
    default_params key: "581d72883d489414282a458031f48ae2"
    format :json

    def self.for term
        get("/search", query: {q: term})['recipes']
    end

end
