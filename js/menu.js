var sound = document.getElementById("buzz");
var btn = document.getElementById("zumbido");	
var beepc = document.querySelector("#beepc");


function buzzing() {					
	sound.play();			
}		

var zoom = false;
function vistaEscritorio(){	
	if(zoom == false){
		document.body.style = "zoom: 45%";
		zoom = true;
	}else{
		document.body.style = "zoom: 100%";
		zoom = false;
	}
	
}
function myFunction() {
	var dots = document.querySelector(".dots");
	var moreText = document.querySelector(".more");
	var btnText = document.querySelector(".myBtn");

	/*document.querySelector(".div-figure").style =" background-color: rgb(216, 216, 216); position: absolute; max-height: max-content;overflow: visible;	padding-bottom: 20px; box-shadow: 2px 2px 4px #bbbab8, 10px 10px 10px rgb(141, 141, 141);";
	document.querySelector(".div-figure").style =" background-color: rgb(216, 216, 216); position: absolute; max-height: max-content;overflow: visible;	padding-bottom: 20px; box-shadow: 2px 2px 4px #bbbab8, 10px 10px 10px rgb(141, 141, 141);";
	/*position: absolute;
		max-height: max-content;
		overflow: visible;
		padding-bottom: 20px;
		box-shadow: 2px 2px 4px #bbbab8, 10px 10px 10px rgb(141, 141, 141);		
		*/
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less"; 
	  moreText.style.display = "inline";
	}
}
/*///////////JQUERY///////////////////////////////////////*/
/*///////////JQUERY///////////////////////////////////////*/
$(document).ready(function() {	
	$(".sona").click(function() {
	  var elem = $("#toggle").text();
	  if (elem == "Read More") {
		//Stuff to do when btn is in the read more state
		$(".puntos").text("");
		$("#toggle").text("Read Less");
		$("#text").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos").text("...");
		$("#toggle").text("Read More");
		$("#text").slideUp();
	  }
	});
  });