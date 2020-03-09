export function Scoreboard() {

	this.get = function() {
		return fetch(`http://localhost:3001/scoreboards`)
		.then(res => res.json())
	}

	this.addPlayer = function(playerName) {
		return fetch("http://localhost:3001/players", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				name: playerName
			})
		})
		.then(res => res.json())
	}

	this.update = function(playerID, score, powerLevel) {
		return fetch("http://localhost:3001/scoreboards", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				player_id: playerID,
				score: score,
				power_level: powerLevel
			})
		})
	}

}