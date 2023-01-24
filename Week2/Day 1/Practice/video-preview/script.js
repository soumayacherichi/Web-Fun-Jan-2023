console.log("page loaded...");

function over(element) {
    element.style.backgroundColor = "rebeccapurple";    
}
    
function out(element) {
    element.style.backgroundColor = "white";   
}
console.log("page loaded...");

function playVideo(vid) {
    vid.play();
}

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}