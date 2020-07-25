var request = [];

function songSelected() {
    var songChoice = document.getElementById("yourSong").value;
    var artistChoice = document.getElementById("yourArtist").value;
    var genreChoice = document.getElementById("yourArtist").value;

    if (songChoice == null || songChoice == "") {
        alert("fill out song");
        document.getElementById("yourSong").style.border = "solid 1px red";
    } else if (artistChoice == null || artistChoice == "") {
        alert("fill out artist");
        document.getElementById("yourArtist").style.border = "solid 1px red";
    } else if (genreChoice == null || genreChoice == "") {
        alert("fill out Genre");
        document.getElementById("userSide").style.border = "solid 1px red";
    } else {
        request.push({
            song: songChoice,
            artist: artistChoice,
            genre: genreChoice,
        });

        /**
         * // pushing on the array
         * request.push(songChoice);
         *
         * document.getElementById('output').innerHTML = request[i];
         */

        // reset the output of the HTML to nothing
        document.getElementById("output").innerHTML = "";

        // loop through each element the array and write it to the screen
        for (i = 0; i < request.length; i++) {
            // remove all unnecessary trailing commas extra credit kinda deal
            document.getElementById("output").innerHTML += request[i].song + " " + request[i].artist + " " + request[i].genre + ", ";
        }

        // document.getElementById("Song").innerHTML = yourSong;
        // document.getElementById("Artist").innerHTML = yourArtist;
        // document.getElementById("genre").innerHTML = yourgenre;

        document.getElementById("yourSong").style.border = "solid 1px green";
        document.getElementById("yourArtist").style.border = "solid 1px green";
        document.getElementById("yourDrink").style.border = "solid 1px green";
    }
}





