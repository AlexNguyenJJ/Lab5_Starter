// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  /* Change the sound file and image displayed based on selection */

  // Get the <section> HTML element for horns
  var hornSelect = document.getElementById("horn-select");
  // Create an EventListener for when there is a change in horn value and change
  // img accordingly
  hornSelect.addEventListener('change', (event) => {

    // Select horn image using CSS for "#expose img"
    let imgHorn = document.querySelector("#expose img");
    // Select audio file using CSS for ".hidden"
    let audioHorn = document.querySelector(".hidden");

    switch (event.target.value) {
      case "air-horn":
        imgHorn.setAttribute("src", "assets/images/air-horn.svg");
        imgHorn.setAttribute("alt", "Air horn selected");
        audioHorn.setAttribute("src", "assets/audio/air-horn.mp3");
        break;
      case "car-horn":
        imgHorn.setAttribute("src", "assets/images/car-horn.svg");
        imgHorn.setAttribute("alt", "Car horn selected");
        audioHorn.setAttribute("src", "assets/audio/car-horn.mp3");
        break;
      case "party-horn":
        imgHorn.setAttribute("src", "assets/images/party-horn.svg");
        imgHorn.setAttribute("alt", "Party horn selected");
        audioHorn.setAttribute("src", "assets/audio/party-horn.mp3");
        break;
      default:
        console.log("invalid option");
    }
  })

  /* Audio Slider option */
  var audioSlider = document.querySelector("#volume-controls input[type='range']");
  var volumeLevelIcon = document.querySelector("#volume-controls img");
  audioSlider.addEventListener('input', (event) => {

    // Select audio file using CSS for ".hidden"
    let audioHorn = document.querySelector(".hidden");

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
  
}