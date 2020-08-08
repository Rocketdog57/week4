var request = [];

function songSelected() {
    var songChoice = document.getElementById("yourSong").value;
    var artistChoice = document.getElementById("yourArtist").value;
    var genreChoice = document.getElementById("yourGenre").value;

    if (songChoice == null || songChoice == "") {
        alert("fill out song");
        document.getElementById("yourSong").innerHTML = "Song";
        document.getElementById("yourSong").style.border = "solid 1px green";
        
    } else if (artistChoice == null || artistChoice == "") {
        alert("fill out artist");
        document.getElementById("yourArtist").innerHTML = "Artist";
        document.getElementById("yourArtist").style.border = "solid 1px green";
    } else if (genreChoice == null || genreChoice == "") {
        alert("fill out Genre");
        document.getElementById("yourGenre").innerHTML = "Genre";
        document.getElementById("yourGenre").style.border = "solid 1px red";
    } else {
        request.push({
            song: songChoice,
            artist: artistChoice,
            genre: genreChoice,
        });

        
         //pushing on the array
         request.push(songChoice);
         request.push(artistChoice);
         request.push(genreChoice);
//document.getElementById('output').innerHTML = request[i];
         

        // reset the output of the HTML to nothing
        document.getElementById("yourSong").innerHTML = "";
        document.getElementById("yourArtist").innerHTML = "";
        document.getElementById("yourGenre").innerHTML = "";
        // loop through each element the array and write it to the screen
        for (i = 0; i < request.length; i++) {
            // remove all unnecessary trailing commas extra credit kinda deal

        document.getElementById("yourSong").innerHTML  += request[i].song + " " + request[i].artist + " " + request[i].genre + ", ";
        }

       //ementById("yourSong").innerHTML = "Song";document.getEl
      //// document.getElementById("yourArtist").innerHTML = "Artist";
        //document.getElementById("yourGenre").innerHTML = "Genre";

      //  document.getElementById("yourSong").style.border = "solid 1px green";
       // document.getElementById("yourArtist").style.border = "solid 1px green";
       // document.getElementById("yourGenre").style.border = "solid 1px green";
    }
}

songSelected()