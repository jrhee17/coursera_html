class Racer
  include Mongoid::Document
  def mongo_client
      Mongoid::Clients.default
  end
  def collection
      mongo_client[:racers]
  end
end
