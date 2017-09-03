function removeMusic(e) {
    if(e.propertyName!=="transform") return;
    e.target.classList.remove("playing");
}
function music(e) {
    const objAudio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const objDiv=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!objAudio) return ;
    objDiv.classList.add("playing");
    objAudio.currentTime=0;
    objAudio.play();
}

var objKeys=Array.from(document.querySelectorAll(".key"));
objKeys.forEach(key=>key.addEventListener('transitionend',removeMusic));//transitionend 事件在 CSS 完成过渡后触发
window.addEventListener('keydown', music);