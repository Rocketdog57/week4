function songSelected() {
	var songChoice =
  document.getElementById("yourSong").value;
	var artistChoice =
  document.getElementById("yourArtist").value;
	var genreChoice =
   document.getElementById("yourGenre").value;  

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
	document.getElementById("Song").innerHTML = songChoice;  
	document.getElementById("Artist").innerHTML = artistChoice; 
	document.getElementById("Genre").innerHTML = genreChoice; 
	document.getElementById("yourSong").style.border = "solid 1px green"; 
	document.getElementById("yourArtist").style.border = "solid 1px green"; 
	}
}

songSelected();
