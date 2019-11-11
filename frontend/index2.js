document.addEventListener("DOMContentLoaded", () => {

    const body = document.querySelector('body');
    const parent_div = document.querySelector(".container-fluid");

    // ================================={Add Music to page}=========================================
    function playSound() {
        let audio = new Audio('http://soundimage.org/wp-content/uploads/2016/01/Light-Years_V001_Looping.mp3');
        audio.play()
    }
    document.addEventListener('click', playSound, true);

    // ======================================{After Game start}====================================
    let game_title = document.createElement('h1');
    game_title.innerText = 'J~austin Game';
    game_title.id = 'game-title';
    game_title.classList.add('animated', 'heartBeat');
    parent_div.append(game_title);
    let game_title_div = document.createElement('div');
    game_title_div.id = "block-div";
    parent_div.append(game_title_div);
    let count_down = document.createElement('h1');
    count_down.id = "countdown";
    count_down.className = "container"
    game_title_div.append(count_down)
    // ================================={Add the countdown timer}====================================
    let time_left = 10;
    let timer_function = setInterval(function () {
        count_down.innerHTML = time_left;
        time_left -= 1;
        if (time_left <= 0) {
            clearInterval(timer_function);
            count_down.innerHTML = "GO"
            count_down.style.color = 'yellow'
            count_down.classList.add('animated', 'rubberBand')
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
    }, 800);
 })