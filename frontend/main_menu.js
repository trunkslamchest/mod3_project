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
	game_start_div.addEventListener("click", attach_play_button);

    parent_div.append(game_start_div);
}

// document.addEventListener("DOMContentLoaded", () => {
// });

function attach_play_button(event){
   const MAIN_WRAPPER = document.querySelector(".main_wrapper");
	MAIN_WRAPPER.innerHTML = ""
	// document.removeEventListener("DOMContentLoaded", start)

	let start_game = document.createElement('script')

	start_game.type = 'text/javascript'
	start_game.src = 'mash_game.js'

	MAIN_WRAPPER.append(start_game)

}

start()