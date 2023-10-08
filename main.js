const btn = document.querySelector(".btn-play");
const btnStop = document.querySelector(".btn-stop");
const fileInput = document.getElementById('fileInput');
const myRange = document.getElementById('myRange');
const pitchRange = document.getElementById('pitchRange');
const rateRange = document.getElementById('rateRange');
let isPlaying = false;

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  console.log(file);
  console.log(file.name);

  let urlVal = file.name;

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
  
  
  btn.addEventListener('click', () => {
      player.start();
  });

  btnStop.addEventListener('click', ()=> {
      player.start();
      player.stop();
  })
});










//////////////////////////// BEFORE OUTPUT ////////////////////////////

// const btn = document.querySelector(".btn-play");
// const fileInput = document.getElementById('fileInput');
// const myRange = document.getElementById('myRange');
// const pitchRange = document.getElementById('pitchRange');

// fileInput.addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   console.log(file);
//   console.log(file.name);

//   let urlVal = file.name;

//   let player = new Tone.Player({
//     url: urlVal,
//     loop: false,
//     playbackRate: 1,
//     volume: -8
//   });

//   let pitchShift = new Tone.PitchShift().toDestination();
//   pitchShift.pitch = 0;
//   player.connect(pitchShift);

//   let reverb = new Tone.Reverb().toDestination();
//   reverb.decay = 10;
//   reverb.wet.value = 0.2;
//   player.connect(reverb);

//   myRange.addEventListener('input', (e)=>{

//     reverb.wet.value = myRange.value / 100;
//     player.connect(reverb);
//   })

//   pitchRange.addEventListener('input', (e)=>{
//     // player.playbackRate = 1 - (pitchRange.value / 10);
//     pitchShift.pitch = pitchRange.value *-1;
//     // player.connect(pitchShift);
//   })
  
  
//   btn.addEventListener('click', ()=>{
//     // console.log(player.url);
//     // player.start();
//     player.start();
//   })
  
// });















  // let shift = new Tone.FrequencyShifter(-1000).toDestination();
  // player.connect(shift);
  





  // let reverb = new Tone.Reverb().toDestination();
  // reverb.decay = 20;
  // reverb.wet.value = 0.2;
  // player.connect(reverb);

  // myRange.addEventListener('input', (e)=>{
  //   // console.log(myRange.value);
  //   reverb.wet.value = myRange.value / 100;
  //   player.connect(reverb);
  // })








    // let nameArr = [...file.name];
  // let increment = 0;

  // nameArr.forEach(letter =>{
  //   if(letter ==" "){
  //     nameArr[increment] = '%202';
  //   }
  //   increment++;
  // });
  // console.log(nameArr);
  // let urlVal = nameArr.join("");
  // console.log(urlVal);
  // let urlVal = encodeURIComponent(file.name.toString());  ;





  // reverb.toDestination();
  





  // console.log(event);
  // const file = event.target.files[0];
  // console.log(file);
  // console.log(file.name);

  // urlVal = file.name;
  // player.url = file.name;



  // const reverb = new Tone.Reverb();
  // reverb.decay = 10;
  // reverb.wet.value = 1;

  // player.connect(reverb);
  // reverb.toDestination();





// btn.addEventListener("click", () => {
//   // Tone.start();
//   // console.log(player);
// });






// btn.addEventListener('click', ()=>{
  //   if(Tone.context.state != 'running'){
    //     Tone.start();
    //     player.start()
    //     btn.addEventListener("stop", () => player.stop());
    //   }
    //   // synth.triggerAttackRelease("C4", "8n");
    // })
    
    // btn.addEventListener("click", () => player.stop());
    
    // url: "https://mbardin.github.io/PDM-resources/media/sound_samples/rhythmic_effects/Bubbles.mp3",
// console.log('file://C:/Users/luchi/Downloads/4.png');




// function createPlaylist(files){
//   console.log(files);
//   console.log(files[0].name);

//   if(files[0].name != undefined){
//     urlVal = files[0].name;
//   }

//   console.log(urlVal);
//   console.log(player);
// }