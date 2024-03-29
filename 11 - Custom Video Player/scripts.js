//get Element
//get player
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//get video 
//get progress bar
//toggle 
//get skil buttons
//get range

function togglePlay(){
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
//    video.paused ? video.play() : video.pause();
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}


function scrub(e){
    const sccrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = sccrubTime;
}
//build out function 
//paue is a property 



//hook up the event listers 

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button=> button.addEventListener("click", skip));
ranges.forEach(range=> range.addEventListener("change", handleRange));
ranges.forEach(range=> range.addEventListener("mousemove", handleRange));

let mousedown = false; 

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => true);
progress.addEventListener("mouseup", () => false);
