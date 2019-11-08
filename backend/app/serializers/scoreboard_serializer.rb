class ScoreboardSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :score, :created_at
end
