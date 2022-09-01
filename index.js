

/* inetializing the variables  */

var audioElement = new Audio("resources/songs/song-1.m4a");

var playButton = document.getElementById("play");

var gif = document.getElementById("gif");

var seekBar =  document.getElementById("seek");

var songIndex = 1;

var cover = document.getElementById("coverImg");

var smallPlay = document.getElementsByClassName("song-button");

// toggle the play pause button //
playButton.addEventListener("click",function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playButton.classList.remove("fa-play-circle");
        playButton.classList.add("fa-pause-circle");
        gif.style.opacity=1;
        cover.src="resources/covers/cover-"+songIndex+".jpg";
    }
    else{
        audioElement.pause();
        playButton.classList.remove("fa-pause-circle");
        playButton.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
});

// updating the seek bar // 

audioElement.addEventListener("timeupdate",function(){
    porgress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    seekBar.value = porgress;
})

// updating audio by seek bar //

seekBar.addEventListener("change",function(){
    diff = parseInt((seekBar.value * audioElement.duration)/100);
    audioElement.currentTime = diff;
})

// function to make all play button //
function makeAllplay(){
    Array.from(document.getElementsByClassName("song-button")).forEach(function(element){
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
// small play buttons functioning //

Array.from(document.getElementsByClassName("song-button")).forEach(function(element){
    element.addEventListener("click",function(e){
        makeAllplay();
        songIndex =parseInt(e.target.id);
        console.log(songIndex);
        audioElement.currentTime = 0;
        audioElement.src = ("resources/songs/song-"+songIndex+".m4a");
        cover.src="resources/covers/cover-"+songIndex+".jpg";
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.play();
        gif.style.opacity=1;
        playButton.classList.remove("fa-play-circle");
        playButton.classList.add("fa-pause-circle");
    })
})


// previus and next button functioning //

document.getElementById("next").addEventListener("click",function(){
    if(songIndex>=11){
        songIndex = 1;
    }
    else{
        songIndex+=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = ("resources/songs/song-"+songIndex+".m4a");
    cover.src="resources/covers/cover-"+songIndex+".jpg";
    audioElement.play();
    playButton.classList.remove("fa-play-circle");
    playButton.classList.add("fa-pause-circle");
    gif.style.opacity=1;
})


document.getElementById("previous").addEventListener("click",function(){
    if(songIndex<=1){
        songIndex = 11;
    }
    else{
        songIndex-=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = ("resources/songs/song-"+songIndex+".m4a");
    cover.src="resources/covers/cover-"+songIndex+".jpg";
    audioElement.play();
    playButton.classList.remove("fa-play-circle");
    playButton.classList.add("fa-pause-circle");
    gif.style.opacity=1;
})

