Player.destroy_all
Scoreboard.destroy_all

# 5.times{Player.create(name: Faker::Name.name)}

# 10.times{Scoreboard.create(player_id: Player.ids.sample, score: rand(1..100))}