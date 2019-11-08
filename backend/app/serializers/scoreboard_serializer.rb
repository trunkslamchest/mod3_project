class ScoreboardSerializer

	include FastJsonapi::ObjectSerializer
	attributes :player_id, :score, :created_at, :player

end
