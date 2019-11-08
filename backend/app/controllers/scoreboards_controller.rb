class ScoreboardsController < ApplicationController

	def index
		@scoreboard = Scoreboard.order(score: :desc)
		render json: ScoreboardSerializer.new(@scoreboard).serialized_json, include: "**"
	end

	def show
		@score = Scoreboard.find(params[:id])
		render json: ScoreboardSerializer.new(@score).serialized_json, include: "**"
	end

end
