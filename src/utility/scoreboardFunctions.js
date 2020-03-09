export function Scoreboard() {

	this.get = function() {
		return fetch(`http://localhost:3001/scoreboards`)
		.then(res => res.json())
	}

}