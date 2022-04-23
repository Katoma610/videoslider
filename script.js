let menuImg1 = document.querySelector('.menuItem1');
let menuImg2 = document.querySelector('.menuItem2');
let menuImg3 = document.querySelector('.menuItem3');
let menuImg4 = document.querySelector('.menuItem4');
let menuImg5 = document.querySelector('.menuItem5');

menuImg1.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/cloud.mp4';
});

menuImg2.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/islands.mp4';
});

menuImg3.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/moon.mp4';
});

menuImg4.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/star.mp4';
});

menuImg5.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/wood.mp4';
});

let timer;
let titleOld = document.querySelector('head title').innerHTML;

function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
    timer = setTimeout(() => {
        changeTitle('/video/pause.png', '😭😭Вернись пожалуйста😭😭')
    }, 3000);
}

window.onfocus = () => {
    clearTimeout(timer);
    changeTitle('/video/play.png', titleOld);
}
