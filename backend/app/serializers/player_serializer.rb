class PlayerSerializer

	include FastJsonapi::ObjectSerializer
	attributes :id, :name, :scoreboards

end
