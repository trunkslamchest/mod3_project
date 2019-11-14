document.addEventListener("DOMContentLoaded", start)

function start(){

	// ================================={ HTML DOM selection }=========================================

    const parent_div = document.querySelector(".main_wrapper");

    parent_div.innerHTML = ""

    // ================================={Add Game Header}=========================================

    game_title()

    // ================================={Add Play Button}=========================================

    play_button()

    // ================================={Add Scoreboard}=========================================

    show_scoreboard()

    // ================================={Add Scoreboard}=========================================

    fine_text()

}

function game_title(){

    const parent_div = document.querySelector(".main_wrapper");

	let game_title_div = document.createElement('div')
	let game_title_text = document.createElement('h1');
	let game_tagline = document.createElement('h2')

    game_title_div.id = 'game_title_div';

    game_title_text.innerText = 'SPACE BAR SMASHER';
    game_title_text.id = 'game_title_text';
    game_title_text.classList.add('animated', 'slideInLeft');

    game_tagline.innerText = 'LET OUT ALL THE PAIN';
    game_tagline.id = 'game_tagline';
    game_tagline.classList.add('animated', 'slideInLeft');

    game_title_div.append(game_title_text);
	game_title_div.append(game_tagline);

    parent_div.append(game_title_div);
}

function play_button(){

    const parent_div = document.querySelector(".main_wrapper");

    let game_start_div = document.createElement('div');

    game_start_div.id = "first-start-button";
    game_start_div.innerText = 'Game Start';

	game_start_div.addEventListener("click", attach_game_countdown);

    parent_div.append(game_start_div);

    game_start_div.addEventListener("mouseover", play_button_change_class)

}

function fine_text(){
    const MAIN_WRAPPER = document.querySelector(".main_wrapper");

    let fine_text_div = document.createElement('div');

    fine_text_div.id = "fine_text_div";
    fine_text_div.innerText = 'Created by Jamal Farah and Austin Smith';
	fine_text_div.classList.add('animated', 'fadeInUp');

    MAIN_WRAPPER.append(fine_text_div);
}

function attach_game_countdown(){

	const MAIN_WRAPPER = document.querySelector(".main_wrapper");

	MAIN_WRAPPER.innerHTML = ""

	let game_countdown_js = document.createElement('script')

	game_countdown_js.type = 'text/javascript'
	game_countdown_js.src = 'game_countdown.js'

	MAIN_WRAPPER.append(game_countdown_js)

}

function play_button_change_class(){
    const parent_div = document.querySelector(".main_wrapper");
    const play_button = document.querySelector("#first-start-button")
    const scoreboard = document.querySelector("#scoreboard_div")

    play_button.id = "first-start-button_hovered"
    play_button.innerText = 'Game Start';

    parent_div.insertBefore(play_button, parent_div.childNodes[1])
}

start()

// document.addEventListener('click', playSound, true);

// function playSound() {
//     let audio = new Audio('http://soundimage.org/wp-content/uploads/2016/01/Light-Years_V001_Looping.mp3');
//     audio.currentTime = 0;
//     audio.play();
//     // audio.pause();
// }

// playSound()