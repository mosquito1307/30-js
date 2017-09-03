var objS=document.querySelector(".hand-s");
var objM=document.querySelector(".hand-m");
var objH=document.querySelector(".hand-h");

let hoursDeg=0;
let secondsDeg=0;
let minDeg=0;

function play() {
    const now=new Date();

    const hours=now.getHours();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();

    hoursDeg=(hours/12)*360+((minutes / 60) * 30)+90+(((seconds / 60) / 60) / 12) * 360;
    secondsDeg=(seconds/60)*360+90;
    minDeg=(minutes/60)*360+ ((seconds / 60) * 6) +90;

}
function updatePlay() {
    hoursDeg+=(((1 / 60) / 60) / 12);
    minDeg+=((1/60)/60)*360;
    secondsDeg+=(1/60)*360;

    objH.style.transform=`rotate(${hoursDeg}deg)`;
    objM.style.transform=`rotate(${minDeg}deg)`;
    objS.style.transform=`rotate(${secondsDeg}deg)`;
}


play();
setInterval(updatePlay,1000);