class Player < ApplicationRecord

	has_many :scoreboards, dependent: :destroy

end
