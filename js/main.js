
var music = document.getElementById("playlist")

function myFunction() {
    document.body.style.backgroundImage = "url(http://s3.favim.com/610/141125/hudson-katy-perry-katycat-prism-Favim.com-2263333.jpg)";
}

function play(){
    music.play();
}

function pause(){
    music.pause();
}

function stop(){
    music.load();
}

function volumen(){
    music.volume.innerText;
} 

function volumenUp(){
    music.volume+=0.1;
}

function volumenDown(){
    music.volume-=0.1;
}

function backward(){
    music.currentTime -= 5;
}

function forward(){
    music.currentTime += 5;
}
  
