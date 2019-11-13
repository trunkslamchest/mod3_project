document.addEventListener("DOMContentLoaded", start_button)

function game_title(){

    const parent_div = document.querySelector(".main_wrapper");

	let game_title_div = document.createElement('div')
	let game_header = document.createElement('h1');
	let game_tagline = document.createElement('h2')

    game_title_div.id = 'game_title_div';

    game_header.innerText = 'Keyboard Smasher';
    game_header.id = 'game_header';
    game_header.classList.add('animated', 'slideInLeft');

    game_tagline.innerText = 'LET OUT ALL THE PAIN';
    game_tagline.id = 'game_tagline';
    game_tagline.classList.add('animated', 'slideInRight');

    game_title_div.append(game_header);
	game_title_div.append(game_tagline);

    parent_div.append(game_title_div);
}

function start_button(){
	// ================================={Html DOM selection }=========================================
    const parent_div = document.querySelector(".main_wrapper");

    // ================================={Add Play Button}=========================================
    let game_start_div = document.createElement('div');
    game_start_div.id = "first-start-button";
    game_start_div.innerText = 'Game Start';
	game_start_div.classList.add('animated', 'pulse');
	game_start_div.addEventListener("click", start_game_countdown);
    parent_div.append(game_start_div);
	// playSound()
}

function start_game_countdown(event){

	const MAIN_WRAPPER = document.querySelector(".main_wrapper");

	MAIN_WRAPPER.innerHTML = ""

	let game_countdown_js = document.createElement('script')

	game_countdown_js.type = 'text/javascript'
	game_countdown_js.src = 'game_countdown.js'

	MAIN_WRAPPER.append(game_countdown_js)

}

game_title()

start_button()

show_scoreboard()

// document.addEventListener('click', playSound, true);

// function playSound() {
//     let audio = new Audio('http://soundimage.org/wp-content/uploads/2016/01/Light-Years_V001_Looping.mp3');
//     audio.currentTime = 0;
//     audio.play();
//     // audio.pause();
// }