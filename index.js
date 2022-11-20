var audio = new Audio("resources/songs/song-1.m4a");
var songIndex = 1;
var cover = document.getElementById("poster");

// play button functioning //
$("#play").click(function(){
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        $("#play").removeClass("fa-play-circle").addClass("fa-pause-circle");
        cover.src=("resources/covers/cover-"+songIndex+".jpg");
        
    }
    else{
        audio.pause();
        $("#play").removeClass("fa-pause-circle").addClass("fa-play-circle");
    }
});


// Seek Updatation //

audio.addEventListener("timeupdate",function(){
    progress = parseInt((audio.currentTime / audio.duration)*100);
    $("#seek").attr("value",progress);
});

// Seek Bar music Updatition //

document.querySelector("#seek").addEventListener("change",function(){
    diff = parseInt((document.querySelector("#seek").value * audio.duration)/100);
    audio.currentTime = diff;
})



// Making all button play //
function makeAllplay(){
    Array.from(document.getElementsByClassName("btn")).forEach(function(element){
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
}

// Small play buttons //

Array.from(document.getElementsByClassName("btn")).forEach(function(element){
    element.addEventListener("click",function(e){
        makeAllplay();
        songIndex = parseInt(e.target.id);
        audio.currentTime = 0;
        audio.src=("resources/songs/song-"+songIndex+".m4a");
        // cover.src = ("resources/covers/cover-"+songIndex+".jpg");
        cover.src="resources/covers/cover-"+songIndex+".jpg";
        audio.play();
        $("#play").removeClass("fa-play-circle").addClass("fa-pause-circle");
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
    });
  });



  // forward button //

$("#next").click(function(){
    if(songIndex>=11){
        songIndex = 1;
    }
    else{
        songIndex+=1;
    }
    audio.currentTime = 0;
    audio.src=("resources/songs/song-"+songIndex+".m4a");
    cover.src=("resources/covers/cover-"+songIndex+".jpg");
    audio.play();
    
});

$("#previous").click(function(){
    if(songIndex<=1){
        songIndex=11;
    }
    else{
        songIndex-=1;
    }
    audio.currentTime = 0;
    audio.src=("resources/songs/song-"+songIndex+".m4a");
    cover.src=("resources/covers/cover-"+songIndex+".jpg");
    audio.play();
});


var openMenu = document.querySelector(".open");
var dropdown = document.querySelector(".dropdown");

openMenu.addEventListener('click',function(){

    if(dropdown.style.display === 'none'){
        dropdown.style.display = 'block';
        openMenu.classList.remove("fa-bars");
        openMenu.classList.add("fa-times");

    }
    else{
        dropdown.style.display = 'none';
        openMenu.classList.remove("fa-times");
        openMenu.classList.add("fa-bars");
    }
})


