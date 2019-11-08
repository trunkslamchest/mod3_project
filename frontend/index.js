document.addEventListener("DOMContentLoaded", (event) => {

	get_scoreboard()
	// get_players()
})

function get_scoreboard(){
	fetch("http://localhost:3000/scoreboards")
	.then(response => response.json())
	.then((scoreboards) => {
		scoreboards.data.forEach((scoreboard) => {
			console.log(scoreboard.attributes.player.name)
			console.log(scoreboard.attributes.score)
			console.log("")
			console.log("")
		})
	})
}

// function get_players(){
// 	fetch("http://localhost:3000/players")
// 	.then(response => response.json())
// 	.then((players) => {
// 		players.data.forEach((player) => {
// 			console.log(player)
// 		})
// 	})
// }