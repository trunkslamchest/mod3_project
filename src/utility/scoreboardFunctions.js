export function Scoreboard() {

	this.get = function() {
		return fetch(`http://localhost:3001/scoreboards`)
		.then(res => res.json())
	}

	this.addScore = function(player, score, powerLevel) {
		return fetch("http://localhost:3001/scoreboards", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				player: player,
				score: score,
				power_level: powerLevel
			})
		})
		.then(res => res.json())
	}

}