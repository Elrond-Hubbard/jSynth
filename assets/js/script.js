

playButton = document.querySelector('#play');
playButton.addEventListener('click', playTone);

function playTone() {
    const actx = new (AudioContext);
    const osc = actx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 440; //Hz = middle A
    osc.connect(actx.destination); //pc audio output
    osc.start();
    osc.stop(actx.currentTime + 0.5);
}