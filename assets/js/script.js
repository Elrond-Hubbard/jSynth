////////////////////////////////////////////////////////////////////////////////////////////////////////
const actx = new (AudioContext || webkitAudioContext());
///// KEY CONTROLLER MODULE /////

// NOTE FREQUENCY BANK
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

let keyPressed = false;

// TRIGGER OSCILLATOR
document.querySelectorAll('button[data-note]').forEach((button) => {
    const freq = (NOTES[button.dataset.note])
    button.addEventListener('pointerdown', function (event) {
        event.preventDefault;
        oscBank = new Array(3);
        oscBank[0] = createOscillator(freq, 0, keyPressed);
        oscBank[1] = createOscillator(freq, unisonWidth, keyPressed);
        oscBank[2] = createOscillator(freq, -unisonWidth, keyPressed);
        oscBank.forEach(osc => {
            osc.start();
        })
    })
    button.addEventListener('pointerup', function (event) {
        event.preventDefault;
        oscBank.forEach(osc => osc.stop());
    })
})


////////////////////////////////////////////////////////////////////////////////////////////////////////

///// OSCILLATOR MODULE /////

// WAVEFORM
const waveSelector = document.querySelector('#wave-selector');
const waveLabel = document.getElementById('wave-label')
const WAVEFORM = [
    'sine',
    'square',
    'sawtooth',
    'triangle'
];
waveSelector.addEventListener('input', function () {
    waveLabel.innerText = WAVEFORM[waveSelector.value];
})

// UNISON
const unisonSlider = document.querySelector('#unison-width');
var unisonWidth = unisonSlider.value
unisonSlider.addEventListener('input', function () {
    unisonWidth = unisonSlider.value;
})

// OSCILLATORS
function createOscillator(freq, detune) {
    const osc = actx.createOscillator();
    osc.type = WAVEFORM[waveSelector.value];
    osc.frequency.value = freq;
    osc.detune.value = detune;
    osc.connect(actx.destination)
    return osc;
}