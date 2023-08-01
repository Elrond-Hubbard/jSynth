////////////////////////////////////////////////////////////////////////////////////////////////////////

///// OSCILLATOR MODULE /////

// WAVEFORM CONTROL
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

// TRIGGER
const playButton = document.querySelector('#play');
playButton.addEventListener('click', Oscillator);