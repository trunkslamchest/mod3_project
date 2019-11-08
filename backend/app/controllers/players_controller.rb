class PlayersController < ApplicationController

	def index
		@players = Player.all
		render json: PlayerSerializer.new(@players).serialized_json, include: "**"
	end

	def show
		@player = Player.find(params[:id])
		render json: PlayerSerializer.new(@player).serialized_json, include: "**"
	end

end
