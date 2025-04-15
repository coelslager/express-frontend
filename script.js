//event listener - trigger when the DOM is loaded (when visiting the web page)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch('https://common-full-tractor.glitch.me/api/songs');
    const songs = await response.json();
    console.log(songs);

    let html="";
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`;
    }

    document.querySelector("ul").innerHTML = html;
})
