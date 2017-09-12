const objPlay=document.querySelector(".player");
const video=objPlay.querySelector(".viewer");
const objProgress=objPlay.querySelector(".progress");
const objProgressFilled=objPlay.querySelector(".progress__filled");
const objToggle=objPlay.querySelector(".toggle");
const range=objPlay.querySelectorAll(".player__slider");
const objChange=objPlay.querySelectorAll("[data-skip]");

/*点击视频*/
video.addEventListener("click",videoChange);
/*objPlay.addEventListener("click",changeIcon);*/
video.addEventListener("play",changeIcon);
video.addEventListener("pause",changeIcon);
video.addEventListener("timeupdate",changeProgress);
/*点击播放/暂停按钮*/
objToggle.addEventListener("click",videoChange);
objToggle.addEventListener("click",changeIcon);
/*点击音量和速度*/
let mouseFlag=false;
range.forEach(item=>item.addEventListener("click",handlePlayerSlider));
range.forEach(item=>item.addEventListener("mousedown",()=>mouseFlag=true));
range.forEach(item=>item.addEventListener("mouseup",()=>mouseFlag=false));
range.forEach(item=>item.addEventListener("mousemove",(e)=>mouseFlag&&handlePlayerSlider(e)));

objChange.forEach(item=>item.addEventListener("click",handleSkip));

/*点击进度条*/
let progressFlag=false;
objProgress.addEventListener("click",handleProgress);
objProgress.addEventListener("mousedown",()=>progressFlag=true);
objProgress.addEventListener("mouseup",()=>progressFlag=false);
objProgress.addEventListener("mousemove",(e)=>progressFlag&&handleProgress(e));
function changeIcon() {
    let Icon=video.paused?'►':'❚ ❚';
    objToggle.textContent=Icon;
}

function videoChange(e) {
    if(video.paused){
        video.play();
    }else{
        video.pause();
        }
}

function handlePlayerSlider(e) {
    video[e.target.name]=e.target.value;
}

function handleSkip(e) {
    let skiptime = parseFloat(this.dataset.skip);
    video.currentTime += skiptime;
}

function handleProgress(e) {
    let num=(e.offsetX/objProgress.offsetWidth)* video.duration;
    video.currentTime=num;
}

function changeProgress() {
    let portion = parseFloat(video.currentTime / video.duration) * 100;
    objProgressFilled.style.flexBasis=`${portion}%`;
}

