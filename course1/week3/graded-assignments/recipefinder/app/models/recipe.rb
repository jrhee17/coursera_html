require 'httparty'
require 'pp'

class Recipe < ActiveRecord::Base
    include HTTParty
    #key_value = '581d72883d489414282a458031f48ae2'
    key_value = ENV['FOOD2FORK_KEY']
    hostport = ENV['FOOD2FORK_SERVER_AND_PORT'] || 'www.food2fork.com' 

    base_uri "http://#{hostport}/api"
    default_params key: key_value
    format :json

    def self.for(term)
        get("/search", query: {q: term})['recipes']
    end
end
