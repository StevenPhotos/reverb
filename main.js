const btn = document.querySelector(".btn-play");
const btnStop = document.querySelector(".btn-stop");
const fileInput = document.getElementById('fileInput');
const myRange = document.getElementById('myRange');
const pitchRange = document.getElementById('pitchRange');
const rateRange = document.getElementById('rateRange');
let isPlaying = false;

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  // console.log(file);
  // console.log(file.name);

  let urlVal = URL.createObjectURL(file);

  let player = new Tone.Player({
    url: urlVal,
    loop: false,
    playbackRate: 1,
    volume: -10
  });

  let pitchShift = new Tone.PitchShift().toDestination();
  pitchShift.pitch = 0;

  let reverb = new Tone.Reverb().toDestination();
  reverb.decay = 10;
  reverb.wet.value = 0.2;

  let output = new Tone.Gain().toDestination();

  player.connect(pitchShift);
  pitchShift.connect(reverb);
  reverb.connect(output);

  rateRange.addEventListener('input', (e)=>{
    player.playbackRate = 1 - (rateRange.value / 10);
  });

  myRange.addEventListener('input', (e)=>{
    reverb.wet.value = myRange.value / 100;
  });

  pitchRange.addEventListener('input', (e)=>{
    pitchShift.pitch = pitchRange.value *-1;
    console.log(pitchShift.pitch);
  });


  btn.onclick = () => player.start();
  btnStop.onclick = () => player.stop();

});
