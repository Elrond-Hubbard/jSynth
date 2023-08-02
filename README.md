# jSynth
[Click Here](https://elrond-hubbard.github.io/jSynth/) to try an experimental javascript synthesizer.  
The synthesizer uses WebAudio API to generate and control various audio nodes in a connected signal path.  
This project was created in order to better understand APIs and audio synthesis.

## How to Use  
To play notes, click the buttons on the page.  
To adjust the waveform, use the first slider.  
The waveform is set to "sawtooth" by default.  
To create a more dynamic sound, adjust the "Unison" slider.  
To add an octave to the oscillator, use the "Octave" switch.

## Known Issues
Notes may sometimes become stuck during quick mouse movements.  
(this can be exploited to create drone notes!)  
Gain envelope does not always trigger correctly.