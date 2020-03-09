export const getScoreboard = () => {
	return fetch(`http://localhost:3001/scoreboards`)
	// .then(res => res.json())
	// .then(res_obj => console.log(res_obj))
	// .then(res_obj =>
	// 	this.setState({
	// 		scoreboard: res_obj.data,
	// 		updated_scoreboard: true
	// 	})
	// )
}