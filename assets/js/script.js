////////////////////////////////////////////////////////////////////////////////////////////////////////

///// KEY CONTROLLER MODULE /////

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

document.querySelectorAll('button[data-note]').forEach((button) => {
    const freq = (NOTES[button.dataset.note])
    button.addEventListener('click', function () {
        oscBank[0] = createOscillator(freq, 0);
        oscBank[1] = createOscillator(freq, unisonWidth);
        oscBank[2] = createOscillator(freq, -unisonWidth);
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
oscBank = new Array(3);
function createOscillator(freq, detune) {
    const actx = new (AudioContext || webkitAudioContext());
    const osc = actx.createOscillator();
    osc.type = WAVEFORM[waveSelector.value];
    osc.frequency.value = freq; //Hz = bass A
    osc.detune.value = detune;
    osc.connect(actx.destination); //pc audio output
    osc.start();
    osc.stop(actx.currentTime + 5);
    // return osc;
}


