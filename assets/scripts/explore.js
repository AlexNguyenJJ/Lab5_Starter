// explore.js

window.addEventListener('DOMContentLoaded', init);

/**
 * Binds EventListeners
 */
function bindListeners() {
  var pressToTalkButton = document.querySelector("#explore button");
  var selectVoices = document.querySelector("#explore select");
  var face = document.querySelector("#explore img");
  var voices = window.speechSynthesis.getVoices();

  /* On button click, say the corresponding phrase in the textarea */
  pressToTalkButton.addEventListener('click', (event) => {
    let textArea = document.querySelector("#explore textarea");
    let textToBeSpoken = textArea.value;
    
    // Create the SpeechSynthesisUtterance object with the text in the textarea
    var utterance = new SpeechSynthesisUtterance(textToBeSpoken);

    // Set the utterance's voice to be the right one based on the selected voice
    var selectedOption = selectVoices.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i]
      }
    }

    // Start the speaking of the phrase in the textarea with face changes
    speechSynthesis.speak(utterance);
    face.setAttribute("src", "assets/images/smiling-open.png");
    face.setAttribute("alt", "Smiling open mouthed face");
    utterance.onend = function(event) {
      // Reset to just smiling
      face.setAttribute("src", "assets/images/smiling.png");
      face.setAttribute("alt", "Smiling face");
    }
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