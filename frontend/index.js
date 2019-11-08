document.addEventListener("DOMContentLoaded", (event) => {

	get_scoreboard()
})

// function get_scoreboard(){
// 	fetch("http://localhost:3000/scoreboards")
// 	.then(response => response.json())
// 	.then((players) => {
// 		players.data.forEach((player) => {
// 			let player_object = player.attributes
// 			console.log(player_object)
// 		})
// 	})
// }