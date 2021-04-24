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
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos").text("");
		$("#toggle").text("Leer Menos");
		$("#text").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos").text("...");
		$("#toggle").text("Leer Más");
		$("#text").slideUp();
	  }
	});

	$(".sona2").click(function() {
	  var elem = $("#toggle2").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos2").text("");
		$("#toggle2").text("Leer Menos");
		$("#text2").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos2").text("...");
		$("#toggle2").text("Leer Más");
		$("#text2").slideUp();
	  }
	});
	$(".sona3").click(function() {
	  var elem = $("#toggle3").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos3").text("");
		$("#toggle3").text("Leer Menos");
		$("#text3").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos3").text("...");
		$("#toggle3").text("Leer Más");
		$("#text3").slideUp();
	  }
	});
	$(".sona4").click(function() {
	  var elem = $("#toggle4").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos4").text("");
		$("#toggle4").text("Leer Menos");
		$("#text4").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos4").text("...");
		$("#toggle4").text("Leer Más");
		$("#text4").slideUp();
	  }
	});
	$(".sona5").click(function() {
	  var elem = $("#toggle5").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos5").text("");
		$("#toggle5").text("Leer Menos");
		$("#text5").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos5").text("...");
		$("#toggle5").text("Leer Más");
		$("#text5").slideUp();
	  }
	});
	$(".sona6").click(function() {
	  var elem = $("#toggle6").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos6").text("");
		$("#toggle6").text("Leer Menos");
		$("#text6").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos6").text("...");
		$("#toggle6").text("Leer Más");
		$("#text6").slideUp();
	  }
	});
	$(".sona7").click(function() {
	  var elem = $("#toggle7").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos7").text("");
		$("#toggle7").text("Leer Menos");
		$("#text7").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos7").text("...");
		$("#toggle7").text("Leer Más");
		$("#text7").slideUp();
	  }
	});
	$(".sona8").click(function() {
	  var elem = $("#toggle8").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos8").text("");
		$("#toggle8").text("Leer Menos");
		$("#text8").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos8").text("...");
		$("#toggle8").text("Leer Más");
		$("#text8").slideUp();
	  }
	});
	$(".sona9").click(function() {
	  var elem = $("#toggle9").text();
	  if (elem == "Leer Más") {
		//Stuff to do when btn is in the read more state
		$(".puntos9").text("");
		$("#toggle9").text("Leer Menos");
		$("#text9").slideDown();
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos9").text("...");
		$("#toggle9").text("Leer Más");
		$("#text9").slideUp();
	  }
	});
  });