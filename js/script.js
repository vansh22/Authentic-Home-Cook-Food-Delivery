// For enabling the video play button functionality
let playBtn = document.getElementById("playVideo");
let videoElement = document.getElementById("video");
videoElement.onclick = function (e) {
    e.preventDefault();
    if (videoElement.paused) {
        videoElement.play();
        playBtn.style.display = "none";
    } else {
        videoElement.pause();
        playBtn.style.display = "block"
    }
}
playBtn.onclick = function () {
    videoElement.play();
    playBtn.style.display = "none";
}


// Add to cart modal box
let cartModal = document.getElementById("cartModal");
let addCart = document.getElementById("addCart");
const body = document.querySelector("body");
addCart.onclick = function () {
    cartModal.style.display = "flex";
    body.style.overflow = "hidden";
}
let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
    cartModal.style.display = "none";
    body.style.overflow = "auto";
}


// Request Dish modal box 
let requestDishModal = document.getElementById("requestDishModal");
let requestDishBtn = document.getElementById("requestDishBtn");
requestDishBtn.onclick = function () {
    requestDishModal.style.display = "flex";
    body.style.overflow = "hidden";
}
let cancel = document.getElementsByClassName("close")[1];
let submitEvent = document.getElementsByClassName("close")[2];
submitEvent.onclick = function () {
    requestDishModal.style.display = "none";
    body.style.overflow = "auto";
}
cancel.onclick = function () {
    requestDishModal.style.display = "none";
    body.style.overflow = "auto";
}


// If user clicks outside the modal box, it will disappear
window.onclick = function (event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == requestDishModal) {
        requestDishModal.style.display = "none";
        body.style.overflow = "auto";
    }
}