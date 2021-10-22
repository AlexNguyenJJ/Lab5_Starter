// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /* Change the image displayed based on selection */

  // Get the <section> HTML element for horns
  var hornSelect = document.getElementById("horn-select");
  // Create an EventListener for when there is a change in horn value
  hornSelect.addEventListener('change', (event) => {

    // Select horn image using CSS for "#expose img"
    let imgHorn = document.querySelector("#expose img")

    switch (event.target.value) {
      case "air-horn":
        imgHorn.setAttribute("src", "assets/images/air-horn.svg");
        break;
      case "car-horn":
        imgHorn.setAttribute("src", "assets/images/car-horn.svg");
        break;
      case "party-horn":
        imgHorn.setAttribute("src", "assets/images/party-horn.svg");
        break;
      default:
        console.log("invalid option");
    }
  })

  
}