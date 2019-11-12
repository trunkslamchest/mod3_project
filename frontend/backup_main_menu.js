document.addEventListener("DOMContentLoaded", main_menu)

function main_menu(){

	const MAIN_WRAPPER = document.querySelector(".main_wrapper")

	create_title(MAIN_WRAPPER)

	// create_start_button(MAIN_WRAPPER)
	
	// create_scoreboard(MAIN_WRAPPER)

}


function create_title(MAIN_WRAPPER){
	let header_div = document.createElement("div")
	let header_text = document.createElement("h1")

	header_div.innerText = "test"
	
	MAIN_WRAPPER.append(header_div)

}

