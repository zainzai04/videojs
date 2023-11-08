var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('player1');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const slowButton = document.getElementById('slower');
    const fastButton = document.getElementById('faster');
    const skipButton = document.getElementById('skip');
    const muteButton = document.getElementById('mute');
    const volumeSlider = document.getElementById('slider');
    const volumeDisplay = document.getElementById('volume');
    const vintageButton = document.getElementById('vintage');
    const originalButton = document.getElementById('orig');
  
    // initializations required. source: gpt
    video.autoplay = false;
    video.loop = false;
  
    playButton.addEventListener('click', () => {
      video.play();
	  volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
    });
  
    pauseButton.addEventListener('click', () => {
      video.pause();
    });
  
    slowButton.addEventListener('click', () => {
      video.playbackRate -= 0.1 * video.playbackRate;
      console.log(`New speed: ${video.playbackRate}`);
    });
  
    fastButton.addEventListener('click', () => {
      video.playbackRate += 0.1 * video.playbackRate;
      console.log(`New speed: ${video.playbackRate}`);
    });
  
    skipButton.addEventListener('click', () => {
      if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
      } else {
        video.currentTime += 10;
      }
      console.log(`Current location: ${video.currentTime}`);
    });
  
    muteButton.addEventListener('click', () => {
      video.muted = !video.muted;
      muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });
  
    volumeSlider.addEventListener('input', () => {
      video.volume = volumeSlider.value / 100;
	  volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
    });
  
    vintageButton.addEventListener('click', () => {
      video.classList.add('oldSchool');
    });
  
    originalButton.addEventListener('click', () => {
      video.classList.remove('oldSchool');
    });

	volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;

  });
  

