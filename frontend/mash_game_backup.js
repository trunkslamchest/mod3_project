document.addEventListener("DOMContentLoaded", start_game)

start_game()

function start_game() {

	const MAIN_WRAPPER = document.querySelector(".main_wrapper")

	create_elements(MAIN_WRAPPER)

}

function get_scoreboard() {

	return fetch("http://localhost:3000/scoreboards")

		.then(response => response.json())

}

function create_elements(MAIN_WRAPPER) {

	create_timer(MAIN_WRAPPER)

	create_key_press_counter(MAIN_WRAPPER)

	create_message(MAIN_WRAPPER)

	create_power_bar()

	create_space_bar(MAIN_WRAPPER)

}

function create_timer(MAIN_WRAPPER) {

	let timer_div = document.createElement("div")
	let timer_header = document.createElement("h1")
	let timer_counter = document.createElement("div")


	let n = 30

	timer_div.className = "counter_div"

	timer_header.className = "timer_header"
	timer_header.innerText = "TIME LEFT"

	timer_counter.className = "timer_counter"
	timer_counter.innerText = `${n}`

	timer_div.append(timer_header)
	timer_div.append(timer_counter)

	add_function_to_timer(MAIN_WRAPPER, n, timer_counter, timer_header)

	MAIN_WRAPPER.append(timer_div)

}

function add_function_to_timer(MAIN_WRAPPER, n, timer_counter, timer_header) {

	let timer_time = setInterval(function () {

		timer_counter.textContent = n -= 1;

	}, 100)

	timer_counter.addEventListener("DOMNodeInserted", (event) => {

		let key_press_header = document.querySelector(".key_press_header")
		let key_press_counter = document.querySelector(".key_press_counter")

		let message_header = document.querySelector(".message_header")
		let message_rank = document.querySelector(".message_rank")
		let space_bar_div = document.querySelector(".space_bar_div")

		if (event.target.textContent == 0) {

			// ================================={Add voice to go}=========================================

			var msg = new SpeechSynthesisUtterance();
			var voices = window.speechSynthesis.getVoices();
			msg.voiceURI = 'native';
			msg.volume = 1; // 0 to 1
			msg.rate = 0.7; // 0.1 to 10
			msg.text = 'Game Over idiot!';
			msg.lang = 'en-US';

			speechSynthesis.speak(msg);




			// =========================







			let key_presses = key_press_counter.innerText
			let rank = message_rank.innerText

			key_press_header.innerText = "FINAL SCORE"

			timer_counter.innerText = "OUTTA TIME"
			timer_counter.classList = "game_over_text"
			timer_counter.classList.add('animated', 'heartBeat')



			message_header.innerText = "FINAL RANK"

			clearInterval(timer_time)

			timer_header.innerText = ""
			space_bar_div.innerHTML = ""

			document.removeEventListener("keydown", space_bar_listener_down)
			document.removeEventListener("keyup", space_bar_listener_up)

			create_submit_form(MAIN_WRAPPER, key_presses, rank)

		}

	})
}

function create_key_press_counter(MAIN_WRAPPER) {

	let key_press_div = document.createElement("div")
	let key_press_header = document.createElement("h1")
	let key_press_counter = document.createElement("div")

	key_press_div.className = "key_press_div"

	key_press_header.className = "key_press_header"
	key_press_header.innerText = "PRESSES"

	key_press_counter.className = "key_press_counter"
	key_press_counter.innerText = 0

	key_press_div.append(key_press_header)
	key_press_div.append(key_press_counter)

	MAIN_WRAPPER.append(key_press_div)

}

function create_message(MAIN_WRAPPER) {

	let message_div = document.createElement("div")
	let message_header = document.createElement("h1")
	let message_rank = document.createElement("div")

	message_div.className = "message_div"

	message_header.className = "message_header"
	message_header.innerText = "RANK"

	message_rank.className = "message_rank"
	message_rank.innerText = "BABY FINGERS"

	document.addEventListener("DOMNodeInserted", message_listener)

	message_div.append(message_header)
	message_div.append(message_rank)

	MAIN_WRAPPER.append(message_div)

}

function message_listener(event) {

	let key_press_counter = document.querySelector(".key_press_counter")
	let message_rank = document.querySelector(".message_rank")

	if (key_press_counter.textContent >= 0 && key_press_counter.textContent < 25) {
		message_rank.textContent = "SUPER BABY FINGERS"
	} else if (key_press_counter.textContent >= 25 && key_press_counter.textContent < 50) {
		message_rank.textContent = "SLOW HANDS McOLD PERSON"
	} else if (key_press_counter.textContent >= 50 && key_press_counter.textContent < 75) {
		message_rank.textContent = "CEMENT WRISTS"
	} else if (key_press_counter.textContent >= 75 && key_press_counter.textContent < 100) {
		message_rank.textContent = "HAIRY KNUCKLES"
	} else if (key_press_counter.textContent >= 100 && key_press_counter.textContent < 125) {
		message_rank.textContent = "EDWARD SCISSOR HANDS"
	} else if (key_press_counter.textContent >= 125 && key_press_counter.textContent < 150) {
		message_rank.textContent = "WASTED TALENT"
	} else if (key_press_counter.textContent >= 150 && key_press_counter.textContent < 175) {
		message_rank.textContent = "TYPO BOT 9000"
	} else if (key_press_counter.textContent >= 175 && key_press_counter.textContent < 200) {
		message_rank.textContent = "JACKY FENG"
	} else if (key_press_counter.textContent >= 200 && key_press_counter.textContent < 225) {
		message_rank.textContent = "RUSSIAN SPY"
	} else if (key_press_counter.textContent >= 225 && key_press_counter.textContent < 250) {
		message_rank.textContent = "FROG"
	} else if (key_press_counter.textContent >= 250 && key_press_counter.textContent < 275) {
		message_rank.textContent = "SUPER FROG"
	} else if (key_press_counter.textContent >= 275 && key_press_counter.textContent < 300) {
		message_rank.textContent = "GRAMMER NAZI"
	} else if (key_press_counter.textContent >= 300 && key_press_counter.textContent < 325) {
		message_rank.textContent = "KEYBOARD JESUS"
	} else if (key_press_counter.textContent >= 325 && key_press_counter.textContent < 350) {
		message_rank.textContent = "ABSOLUTE LEGEND"
	} else if (key_press_counter.textContent >= 350 && key_press_counter.textContent < 375) {
		message_rank.textContent = "ANDROID ROBOT"
	} else if (key_press_counter.textContent >= 375 && key_press_counter.textContent < 400) {
		message_rank.textContent = "ON CLICK SCRIPTER"
	} else if (key_press_counter.textContent >= 400 && key_press_counter.textContent < 425) {
		message_rank.textContent = "POTENTIALLY CHEATING"
	} else if (key_press_counter.textContent >= 425 && key_press_counter.textContent < 450) {
		message_rank.textContent = "PROBABLY CHEATING"
	} else if (key_press_counter.textContent >= 450 && key_press_counter.textContent < 475) {
		message_rank.textContent = "MOST LIKELY CHEATING"
	} else if (key_press_counter.textContent >= 475 && key_press_counter.textContent < 500) {
		message_rank.textContent = "MOST DEFINITELY CHEATING"
	} else {
		message_rank.textContent = "COMPLETELY CHEATING"
	}

}

function create_space_bar(MAIN_WRAPPER) {

	let key_press_counter = document.querySelector(".key_press_counter")

	let space_bar_div = document.createElement("div")
	let space_bar_button = document.createElement("div")

	space_bar_div.className = "space_bar_div"

	space_bar_button.innerText = "Not Pressed"
	space_bar_button.className = "space_bar_button"

	space_bar_div.append(space_bar_button)

	let n = parseInt(key_press_counter.innerText, 10)

	document.addEventListener("keydown", space_bar_listener_down)
	document.addEventListener("keyup", space_bar_listener_up)

	MAIN_WRAPPER.append(space_bar_div)

}

function space_bar_listener_down(event) {

	let key_press_counter = document.querySelector(".key_press_counter")
	let time_counter = document.querySelector(".timer_counter")
	let space_bar_button = document.querySelector(".space_bar_button")

	let n = parseInt(key_press_counter.innerText, 10)

	if (event.which === 32 && time_counter.textContent > 0) {

		n += 1

		key_press_counter.innerText = n

		space_bar_button.style.color = "#fff"
		space_bar_button.style.background = "green"
		space_bar_button.innerText = "Pressed"

	}

	document.removeEventListener("keydown", space_bar_listener_down);
}

function space_bar_listener_up(event) {

	let space_bar_button = document.querySelector(".space_bar_button")

	if (event.which === 32) {
		space_bar_button.style.color = "#000"
		space_bar_button.style.background = "buttonface"
		space_bar_button.innerText = "Not Pressed"
	}

	document.addEventListener("keydown", space_bar_listener_down)

}

function create_submit_form(MAIN_WRAPPER, key_presses, rank) {

	let submit_form = document.createElement("form")
	let submit_name = document.createElement("input")
	let submit_button = document.createElement("button")

	submit_form.className = "submit_form"
	submit_name.setAttribute("placeholder", "Enter Your Name...")
	submit_name.className = "submit_input"
	submit_name.setAttribute("name", "Name")
	submit_button.innerText = "Submit Score"
	submit_button.className = "submit_button"

	submit_form.append(submit_name)
	submit_form.append(submit_button)

	MAIN_WRAPPER.append(submit_form)

	document.addEventListener("submit", submit_form_listener)

}

function submit_form_listener(event) {

	event.preventDefault()

	let key_press_counter = document.querySelector(".key_press_counter")
	let key_presses = key_press_counter.innerText
	let MAIN_WRAPPER = document.querySelector(".main_wrapper")

	let name = event.target[0].value.trim()

	fetch("http://localhost:3000/players", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"accept": "application/json",
			},
			body: JSON.stringify({
				name: name
			})
		})
		.then(response => response.json())
		.then((player_object) => {
			fetch("http://localhost:3000/scoreboards", {
					method: "POST",
					headers: {
						"content-type": "application/json",
						"accept": "application/json",
					},
					body: JSON.stringify({
						player_id: player_object.id,
						score: key_presses
					})
				})
				.then(response => response.json())
				.then((response_object) => {
					get_scoreboard()
						.then((response_obj) => {
							if (response_obj.data.length < 21) {
								(fetch("http://localhost:3000/scoreboards")
									.then(response => response.json())
									.then(new_scoreboard => {
										document.removeEventListener("DOMNodeInserted", message_listener)
										create_scoreboard(MAIN_WRAPPER, new_scoreboard)
									})
								)
							} else {
								for (let i = 20; i < response_obj.data.length; i++) {
									fetch(`http://localhost:3000/scoreboards/${response_obj.data[i].id}`, {
											method: "DELETE"
										})
										.then(fetch("http://localhost:3000/scoreboards")
											.then(response => response.json())
											.then(new_scoreboard => {
												document.removeEventListener("DOMNodeInserted", message_listener)
												create_scoreboard(MAIN_WRAPPER, new_scoreboard)
											})
										)
								}
							}
						})
				})
		})
}

function create_scoreboard(MAIN_WRAPPER, new_scoreboard) {

	MAIN_WRAPPER.innerHTML = ""

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

	create_bottom_buttons(MAIN_WRAPPER)

}

function create_bottom_buttons(MAIN_WRAPPER) {

	let bottom_button_div = document.createElement("div")
	let play_again_button = document.createElement("button")
	let main_menu_button = document.createElement("button")

	bottom_button_div.className = "bottom_button_div"

	main_menu_button.className = "main_menu_button"
	main_menu_button.innerText = "MAIN MENU"

	play_again_button.className = "play_again_button"
	play_again_button.innerText = "PLAY AGAIN?"

	play_again_button.addEventListener("click", play_again_button_listener)
	main_menu_button.addEventListener("click", main_menu_button_listener)

	bottom_button_div.append(main_menu_button)
	bottom_button_div.append(play_again_button)

	MAIN_WRAPPER.append(bottom_button_div)

}

function play_again_button_listener(event) {

	let MAIN_WRAPPER = document.querySelector(".main_wrapper")

	MAIN_WRAPPER.innerHTML = ""

	start_game_countdown(MAIN_WRAPPER)

}

function main_menu_button_listener(event) {

	let MAIN_WRAPPER = document.querySelector(".main_wrapper")

	MAIN_WRAPPER.innerHTML = ""

	start_main_menu(MAIN_WRAPPER)

}

function start_main_menu(MAIN_WRAPPER) {

	document.removeEventListener("DOMContentLoaded", start)

	let main_menu = document.createElement('script')

	main_menu.type = 'text/javascript'
	main_menu.src = 'main_menu.js'

	MAIN_WRAPPER.innerHTML = ""
	MAIN_WRAPPER.appendChild(main_menu)

}

function start_game_countdown(MAIN_WRAPPER) {

	document.removeEventListener("DOMContentLoaded", start)

	let game_countdown = document.createElement('script')

	game_countdown.type = 'text/javascript'
	game_countdown.src = 'game_countdown.js'

	MAIN_WRAPPER.innerHTML = ""
	MAIN_WRAPPER.appendChild(game_countdown)

}