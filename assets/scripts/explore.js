// explore.js

window.addEventListener('DOMContentLoaded', init);

/**
 * Binds EventListeners
 */
function bindListeners() {
  var pressToTalkButton = document.querySelector("#explore button");

  pressToTalkButton.addEventListener('click', (event) => {
    let textArea = document.querySelector("#explore textarea");
    let textToBeSpoken = textArea.value;
    console.log(textToBeSpoken);
    let utterance = new SpeechSynthesisUtterance(textToBeSpoken);
    speechSynthesis.speak(utterance);
  })
}

/**
 * On page load, load all the available voices for SpeechSynthesizer and populate
 * dropdown
 */
function loadVoices() {
  setTimeout(() => {
    var voices = window.speechSynthesis.getVoices();
    var selectVoices = document.querySelector("#explore select");
    for (let i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      selectVoices.appendChild(option);
    }
  }, 100)

  
}

function init() {
  bindListeners();
  window.onload = loadVoices();

  
}