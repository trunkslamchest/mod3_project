document.addEventListener("DOMContentLoaded", start_button)

function game_title(){

    const parent_div = document.querySelector(".main_wrapper");

	let game_title = document.createElement('h1');

    game_title.innerText = 'Keyboard Smasher';
    game_title.id = 'game-title';
    game_title.classList.add('animated', 'slideInLeft');

    parent_div.append(game_title);
}

function start_button(){
	    // ================================={Html DOM selection }=========================================
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