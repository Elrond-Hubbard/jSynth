////////////////////////////////////////////////////////////////////////////////////////////////////////

///// OSCILLATOR MODULE /////

// WAVEFORM CON
const waveSelector = document.querySelector('#wave-selector');
const waveLabel = document.getElementById('wave-label')
const waveForms = [
    'sine',
    'square',
    'sawtooth',
    'triangle'
];
waveSelector.addEventListener('input', function() {
    waveLabel.innerText = waveForms[waveSelector.value];
})

// OSCILLATOR
function Oscillator() {
    const actx = new (AudioContext);
    const osc = actx.createOscillator();
    osc.type = waveForms[waveSelector.value];
    osc.frequency.value = 220; //Hz = bass A
    osc.connect(actx.destination); //pc audio output
    osc.start();
    osc.stop(actx.currentTime + 0.5);
}

// TRIGGERS
const NOTES = {
    'c-4': 261.626,
    'c#4': 277.183,
    'd-4': 293.665,
    'd#4': 311.127,
    'e-4': 329.628,
    'f-4': 349.228,
    'f#4': 369.994,
    'g-4': 391.995,
    'g#4': 415.305,
    'a-4': 440,
    'a#4': 466.164,
    'b-4': 493.883,
    'c-5': 523.251
}

playButton = document.querySelector('#button')
playButton.addEventListener('click', Oscillator)