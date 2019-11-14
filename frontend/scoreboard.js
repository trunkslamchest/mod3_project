function get_scoreboard() {

	return fetch("http://localhost:3000/scoreboards")
	.then(response => response.json())

}

function show_scoreboard() {

	const MAIN_WRAPPER = document.querySelector(".main_wrapper")

	let scoreboard_div = document.createElement("div")
	let scoreboard_header = document.createElement("h1")
	let scoreboard_table = document.createElement("table")
	let scoreboard_table_top_row = document.createElement("tr")
	let scoreboard_table_name_th = document.createElement("th")
	let scoreboard_table_score_th = document.createElement("th")

	scoreboard_div.id = "scoreboard_div"

	scoreboard_header.textContent = "HIGH SCORES"
	scoreboard_header.className = "scoreboard_menu_header "

	scoreboard_table.className = "scoreboard_menu_table"
	scoreboard_table_top_row.className = "scoreboard_menu_table_top_row"

	scoreboard_table_name_th.textContent = "NAME"
	scoreboard_table_score_th.textContent = "SCORE"

	scoreboard_table_top_row.append(scoreboard_table_name_th)
	scoreboard_table_top_row.append(scoreboard_table_score_th)

	scoreboard_table.append(scoreboard_table_top_row)

	get_scoreboard()
	.then((new_scoreboards) => {
		let i = 1
		new_scoreboards.data.forEach((new_scoreboard) => {
			let scoreboard_name_td = document.createElement("td")
			let scoreboard_score_td = document.createElement("td")

			let scoreboard_tr = document.createElement("tr")

			scoreboard_tr.className = "scoreboard_menu_item"

			scoreboard_name_td.textContent = `${i}) ${new_scoreboard.attributes.player.name}`
			scoreboard_score_td.textContent = `${new_scoreboard.attributes.score}`

			scoreboard_tr.append(scoreboard_name_td)
			scoreboard_tr.append(scoreboard_score_td)

			scoreboard_table.append(scoreboard_tr)

			i++
		})
	})

	scoreboard_div.append(scoreboard_header)
	scoreboard_div.append(scoreboard_table)

	MAIN_WRAPPER.append(scoreboard_div)

}