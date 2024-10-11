let keysPressed = {};

document.addEventListener('keydown', function(e) {
    if (keysPressed[e.key]) return;  // If the key is already pressed, return
    keysPressed[e.key] = true;        // Mark the key as pressed

    switch(e.key){
        case "d":
            var note1 = new Audio("assets/do.wav");
            note1.play();
            break;
        case "f":
            var note2 = new Audio("assets/re.wav");
            note2.play();
            break;
        case "g":
            var note3 = new Audio("assets/mi.wav");
            note3.play();
            break;
        case "h":
            var note4 = new Audio("assets/fa.wav");
            note4.play();
            break;
        case "j":
            var note5 = new Audio("assets/sol.wav");
            note5.play();
            break;
        case "k":
            var note6 = new Audio("assets/la.wav");
            note6.play();
            break;
        case "l":
            var note7 = new Audio("assets/si.wav");
            note7.play();
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', function(e) {
    keysPressed[e.key] = false;  // Reset the key state when it is released
});
