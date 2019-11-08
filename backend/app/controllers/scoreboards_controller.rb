class ScoreboardsController < ApplicationController
	def index
		@scoreboard = Scoreboard.order(id: :asc)
		render json: ScoreboardSerializer.new(@scoreboard).serialized_json
	end

	def show
		@player = Scoreboard.find(params[:id])
		render json: ScoreboardSerializer.new(@player).serialized_json
	end

end
