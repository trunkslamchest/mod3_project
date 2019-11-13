var power_timer;

function start_power_timer(){
	power_timer = setInterval( function() {
		let power_bar = document.querySelector(".power_bar")

		power_bar.value -= 0.004

		console.log(power_bar.value)
  	}, 10);
}

function stop_power_timer(){
	clearInterval(power_timer)
}

function create_power_bar() {

	const MAIN_WRAPPER = document.querySelector(".main_wrapper")

	let power_div = document.createElement("div")
	let power_header = document.createElement("h1")
	let power_bar = document.createElement("meter")

	power_div.className = "power_div"
	power_header.className = "power_header"
	power_bar.className = "power_bar"

	power_bar.setAttribute("min", 0.0)
	power_bar.setAttribute("max", 1.0)
	power_bar.setAttribute("value", 0.0)
	power_bar.setAttribute("low", 0.25)
	power_bar.setAttribute("optimum", 0.5)
	power_bar.setAttribute("high", 0.75)

	power_header.textContent = "Power Level"

	document.addEventListener("keydown", power_bar_down)
	document.addEventListener("keyup", power_bar_up)
	// document.addEventListener("keyup", power_bar_up)
	document.addEventListener("DOMNodeInserted", clear_listeners)

	power_div.append(power_header)
	power_div.append(power_bar)

	MAIN_WRAPPER.append(power_div)

}

function power_bar_down(){
	let time_counter = document.querySelector(".timer_counter")

	if (event.which === 32 && time_counter.textContent > 0) {

		let power_bar = document.querySelector(".power_bar")

		power_bar.value += 0.02
		console.log(power_bar.value)

		stop_power_timer()

	}


	document.removeEventListener("keydown", power_bar_down);

}

function power_bar_up(){
	let time_counter = document.querySelector(".timer_counter")

	if (event.which === 32 && time_counter.textContent > 0) {

		start_power_timer()
	}

	document.addEventListener("keydown", power_bar_down)

}

function clear_listeners(){
	let time_counter = document.querySelector(".timer_counter")

	if (time_counter  == null || time_counter.textContent == 0) {

		document.removeEventListener("keydown", power_bar_down);
		document.removeEventListener("keyup", power_bar_up);

		stop_power_timer()
	}
}