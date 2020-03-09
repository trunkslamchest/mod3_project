// export var scoreboard = () => {
// 	// return fetch(`http://localhost:3001/scoreboards`)

	
// 	// fetch(`http://localhost:3001/scoreboards`)
// 	// .then(res => res.json())
// 	// .then(res_obj => {
// 	// 	let scoreboard = {}
// 	// 	scoreboard = res_obj
// 	// 	return scoreboard
// 	// })

// }

export function Scoreboard() {
	this.get = function() {
		return fetch(`http://localhost:3001/scoreboards`)
		.then(res => res.json())
	}
}