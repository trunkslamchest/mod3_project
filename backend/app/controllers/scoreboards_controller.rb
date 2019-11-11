class ScoreboardsController < ApplicationController

	def index
		@scoreboard = Scoreboard.order(score: :desc)
		render json: ScoreboardSerializer.new(@scoreboard).serialized_json, include: "**"
	end

	def show
		@score = Scoreboard.find(params[:id])
		render json: ScoreboardSerializer.new(@score).serialized_json, include: "**"
	end


	def create
		@scoreboard = Scoreboard.create(create_scoreboard_params)

		if @scoreboard.valid?
			render json: @scoreboard, status: 201
		else
			render json: {errors: @scoreboard.errors.full_messages}, status: 401
		end
	end

	def destroy
		@score = Scoreboard.find(params[:id])
		@score.destroy

		render json: @score, status: 201
	end

private

	def create_scoreboard_params
		params.permit(:player_id, :score)
	end

end
