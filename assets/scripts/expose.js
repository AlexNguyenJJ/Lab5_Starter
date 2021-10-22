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
        audioHorn.setAttribute("src", "assets/audio/air-horn.mp3");
        break;
      case "car-horn":
        imgHorn.setAttribute("src", "assets/images/car-horn.svg");
        audioHorn.setAttribute("src", "assets/audio/car-horn.mp3");
        break;
      case "party-horn":
        imgHorn.setAttribute("src", "assets/images/party-horn.svg");
        audioHorn.setAttribute("src", "assets/audio/party-horn.mp3");
        break;
      default:
        console.log("invalid option");
    }
  })


  
}