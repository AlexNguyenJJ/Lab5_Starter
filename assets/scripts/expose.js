// expose.js

window.addEventListener('DOMContentLoaded', init);

function bindListeners() {
  
  // Query needed elements
  var hornSelect = document.getElementById("horn-select");
  var imgHorn = document.querySelector("#expose img");
  var audioHorn = document.querySelector(".hidden");
  var audioSlider = document.querySelector("#volume-controls input[type='range']");
  var volumeLevelIcon = document.querySelector("#volume-controls img");
  var playButton = document.querySelector("#volume-controls ~ button");
  var partyHorn = false;

  const jsConfetti = new JSConfetti(); // Enable confetti

  
  /* Change the sound file and image displayed based on selection */

  hornSelect.addEventListener('change', (event) => {

    switch (event.target.value) {
      case "air-horn":
        imgHorn.setAttribute("src", "assets/images/air-horn.svg");
        imgHorn.setAttribute("alt", "Air horn selected");
        audioHorn.setAttribute("src", "assets/audio/air-horn.mp3");
        partyHorn = false;
        break;
      case "car-horn":
        imgHorn.setAttribute("src", "assets/images/car-horn.svg");
        imgHorn.setAttribute("alt", "Car horn selected");
        audioHorn.setAttribute("src", "assets/audio/car-horn.mp3");
        partyHorn = false;
        break;
      case "party-horn":
        imgHorn.setAttribute("src", "assets/images/party-horn.svg");
        imgHorn.setAttribute("alt", "Party horn selected");
        audioHorn.setAttribute("src", "assets/audio/party-horn.mp3");
        partyHorn = true;
        break;
      default:
        console.log("invalid option");
    }
  })

  /* Audio Slider option */

  audioSlider.addEventListener('input', (event) => {

    if (event.target.value == 0) {
      volumeLevelIcon.setAttribute("src", "assets/icons/volume-level-0.svg");
      volumeLevelIcon.setAttribute("alt", "Volume level 0");
    }
    else if (event.target.value < 33) {
      volumeLevelIcon.setAttribute("src", "assets/icons/volume-level-1.svg");
      volumeLevelIcon.setAttribute("alt", "Volume level 1");
    }
    else if (event.target.value < 67) {
      volumeLevelIcon.setAttribute("src", "assets/icons/volume-level-2.svg");
      volumeLevelIcon.setAttribute("alt", "Volume level 2");
    } else {
      volumeLevelIcon.setAttribute("src", "assets/icons/volume-level-3.svg");
      volumeLevelIcon.setAttribute("alt", "Volume level 3");
    }
    // Set volume for audio
    audioHorn.volume = (event.target.value / 100);
  })
  
  /* Play Button Event */
  
  playButton.addEventListener('click', (event) => {
    if (partyHorn) {
      jsConfetti.addConfetti();
    }
    audioHorn.play();
  })
}

function init() {
  bindListeners();
}