document.addEventListener("DOMContentLoaded", start)

function start(){
    // ================================={Html DOM selection }=========================================
    const body = document.querySelector('body');
    const parent_div = document.querySelector(".main_wrapper");
    // ================================={Add Music to page}=========================================
    document.addEventListener('click', playSound, true);
    function playSound() {
        let audio = new Audio('http://soundimage.org/wp-content/uploads/2016/01/Light-Years_V001_Looping.mp3');
        audio.currentTime = 0;
        audio.play();
        // audio.pause();
    }
    // ================================={Add Play Button}=========================================
    let game_start_div = document.createElement('div');
    game_start_div.id = "first-start-button";

    game_start_div.innerText = 'Game Start';
	game_start_div.addEventListener("click", start_game_countdown);

    parent_div.append(game_start_div);

    show_scoreboard(parent_div)

}


function start_game_countdown(event){
	const MAIN_WRAPPER = document.querySelector(".main_wrapper");
	MAIN_WRAPPER.innerHTML = ""

	let game_countdown_js = document.createElement('script')

	game_countdown_js.type = 'text/javascript'
	game_countdown_js.src = 'game_countdown.js'

	MAIN_WRAPPER.append(game_countdown_js)

}

// function get_scoreboard() {

// 	return fetch("http://localhost:3000/scoreboards")

// 		.then(response => response.json())

// }

function show_scoreboard(parent_div) {

	let scoreboard_header = document.createElement("h1")

	let scoreboard_table = document.createElement("table")
	let scoreboard_table_top_row = document.createElement("tr")
	let scoreboard_table_name_th = document.createElement("th")
	let scoreboard_table_score_th = document.createElement("th")

	scoreboard_header.textContent = "HIGH SCORES"
	scoreboard_header.className = "scoreboard_header "
	scoreboard_header.classList.add('animated', 'rubberBand')


	scoreboard_table.className = "scoreboard_table"
	scoreboard_table_top_row.className = "scoreboard_table_top_row"

	scoreboard_table_name_th.textContent = "NAME"
	scoreboard_table_score_th.textContent = "SCORE"

	scoreboard_table_top_row.append(scoreboard_table_name_th)
	scoreboard_table_top_row.append(scoreboard_table_score_th)

	scoreboard_table.append(scoreboard_table_top_row)

	fetch("http://localhost:3000/scoreboards")
		.then(response => response.json())
		.then((new_scoreboards) => {
			new_scoreboards.data.forEach((new_scoreboard) => {
				let scoreboard_name_td = document.createElement("td")
				let scoreboard_score_td = document.createElement("td")

				let scoreboard_tr = document.createElement("tr")

				scoreboard_tr.className = "scoreboard_item"

				scoreboard_name_td.textContent = `${new_scoreboard.attributes.player.name}`
				scoreboard_score_td.textContent = `${new_scoreboard.attributes.score}`

				scoreboard_tr.append(scoreboard_name_td)
				scoreboard_tr.append(scoreboard_score_td)

				scoreboard_table.append(scoreboard_tr)
			})
		})

	MAIN_WRAPPER.append(scoreboard_header)
	MAIN_WRAPPER.append(scoreboard_table)

}

start()