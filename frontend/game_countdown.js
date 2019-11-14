document.addEventListener("DOMContentLoaded", start_game_countdown)

function start_game_countdown(){
    const body = document.querySelector('body');
    const parent_div = document.querySelector(".main_wrapper");

    document.addEventListener('click', playSound, true);

    create_countdown_header(parent_div)

    create_countdown_timer(parent_div)

    create_description_text(parent_div)


}

function create_countdown_header(parent_div) {
    let countdown_header_text = document.createElement('h1');
    let countdown_header_div = document.createElement('div');

    countdown_header_text.id = 'countdown_header_text';
    countdown_header_text.innerText = 'PREPARE TO GET SMASHED...';
    countdown_header_text.classList.add('animated', 'heartBeat');

    countdown_header_div.id = "countdown_header_div";

    countdown_header_div.append(countdown_header_text);
    parent_div.append(countdown_header_div);
}

function create_countdown_timer(parent_div){

    let countdown_text = document.createElement('h1');
    let countdown_div = document.createElement('div');

    let time_left = 5;

    countdown_text.id = "countdown_text"
    countdown_text.innerText = time_left

    countdown_div.id = "countdown_div";
    // countdown_div.className = "container"
    countdown_div.classList.add('animated', 'slideInDown')
    countdown_div.append(countdown_text)
    parent_div.append(countdown_div)
    // ================================={Add the countdown timer}====================================
    let timer_function = setInterval(function () {
        time_left -= 1;
        countdown_text.innerText = time_left;
        if (time_left <= 0) {
            countdown_text.innerHTML = "GO"
            countdown_text.style.color = 'yellow'
            countdown_text.classList.add('animated', 'rubberBand')
            clearInterval(timer_function);
			if (countdown_text.textContent === "GO") {
				setTimeout(function(){start_mash_game()}, 1500);
			}
            // ================================={Add voice to go}=========================================
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voiceURI = 'native';
            msg.volume = 1; // 0 to 1
            msg.rate = 0.8; // 0.1 to 10
            msg.text = 'Go';
            msg.lang = 'en-US';
            speechSynthesis.speak(msg);
        }
    }, 1000);
}

function create_description_text(parent_div){

	let tutorial_div = document.createElement("div")
	let tutorial_text = document.createElement("h3")

    tutorial_div.className = "tutorial_div"
    tutorial_div.classList.add('animated', 'slideInUp');

    tutorial_text.className = "tutorial_text"
	tutorial_text.innerText = "Press the Spacebar as many times as you can within 30 seconds!"

	tutorial_div.append(tutorial_text)
	parent_div.append(tutorial_div)
}

function start_mash_game(event){
	const MAIN_WRAPPER = document.querySelector(".main_wrapper");
	MAIN_WRAPPER.innerHTML = ""

	let mash_game_js = document.createElement('script')

	mash_game_js.type = 'text/javascript'
	mash_game_js.src = 'mash_game.js'

	MAIN_WRAPPER.append(mash_game_js)

}

function playSound() {

    let audio = new Audio('http://soundimage.org/wp-content/uploads/2016/01/Light-Years_V001_Looping.mp3');

    audio.play()

}

start_game_countdown()