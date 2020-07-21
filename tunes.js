function songSelected() {
	var songChoice =
  document.getElementbyID("yourSong").value;
	var artistChoice =
  document.getElementbyID("yourArtist").value;
	var genreChoice =
   document.getElementbyID("yourArtist").value;  
}

if (songChoice== null || songChoice == "") {
	alert("fill out song"); 
	document.getElementById("yourSong").style.border = "solid 1px red";
  } else if (artistChoice == null || artistChoice == "") {
	alert("fill out artist");  
	document.getElementById("yourArtist").style.border = "solid 1px red";
  } else if (genreChoice == null || genreChoice == "") {
	alert("fill out Genre");   
    document.getElementById("userSide").style.border = "solid 1px red";
  } else {   
	document.getElementById("Song").innerHTML = yourSong;  
	document.getElementById("Artist").innerHTML = yourArtist; 
	document.getElementById("genre").innerHTML = yourgenre; 
	document.getElementById("yourSong").style.border = "solid 1px green"; 
	document.getElementById("yourArtist").style.border = "solid 1px green"; 
	document.getElementById("yourDrink").style.border = "solid 1px green";
  
}

songSelected()



