class PlayersController < ApplicationController

	def index
		@players = Player.all
		render json: PlayerSerializer.new(@players).serialized_json, include: "**"
	end

	def show
		@player = Player.find(params[:id])
		render json: PlayerSerializer.new(@player).serialized_json, include: "**"
	end

	def create
		@player = Player.create(create_player_params)

		if @player.valid?
			render json: @player, status: 201
		else
			render json: {errors: @player.errors.full_messages}, status: 401
		end
	end

	def destroy
		@player = Scoreboard.find(params[:id])
		@player.destroy

		render json: @player, status: 201
	end

private

	def create_player_params
		params.permit(:name)
	end

end
