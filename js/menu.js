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

//#region cambiar atributos

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
//#endregion
/*///////////JQUERY///////////////////////////////////////*/
/*///////////JQUERY///////////////////////////////////////*/

//#region  estadobase

/*var div_figure = document.querySelector(".div-figure");*/
/*
function estadoBase(){
	$(".puntos").text("...Leer Más");		
	$("#text").slideUp();
	$(".sona").css("box-shadow", "none");
	
	$(".puntos2").text("...Leer Más");		
	$("#text2").slideUp();
	$(".sona2").css("box-shadow", "none");

	$(".puntos3").text("...Leer Más");		
	$("#text3").slideUp();
	$(".sona3").css("box-shadow", "none");	

}*/
//#endregion	

var opcion= 0;
$(document).ready(function() {				  

	$(".sona").click(function() {	
		var elem = $(".puntos").text();
		if (elem == "...Leer Más") {
		  //si no esta desplegado desplegar y eliminar los 3 puntos
		  $("#text").slideDown();
		  $(".puntos").text("");		
		 /* $(".sona").css("box-shadow", "2px 2px 4px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
		  
		} else {
		  //Stuff to do when btn is in the read less state		
		  $(".puntos").text("...Leer Más");	
		  $("#text").slideUp();		
		 /* $(".sona").css("box-shadow", "none");*/
		}
	  });
	
	$(".sona2").click(function() {	
	  var elem2 = $(".puntos2").text();
	  if (elem2 == "...Leer Más") {
		//si no esta desplegado desplegar y eliminar los 3 puntos
		$("#text2").slideDown();
		$(".puntos2").text("");		
		/*$(".sona2").css("box-shadow", "2px 2px 4px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
		
	  } else {
		//Stuff to do when btn is in the read less state		
		$(".puntos2").text("...Leer Más");	
		$("#text2").slideUp();		
		/*$(".sona2").css("box-shadow", "none");*/
	  }
	});

	
	$(".sona3").click(function() {
	  var elem = $(".puntos3").text();
	  if (elem == "...Leer Más") {
		//Stuff to do when btn is in the read more state		
		$("#text3").slideDown();
		$(".puntos3").text("");		
		/*$(".sona3").css("box-shadow", "2px 2px 4px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
	  } else {
		//Stuff to do when btn is in the read less state
		$(".puntos3").text("...Leer Más");		
		$("#text3").slideUp();
		/*$(".sona3").css("box-shadow", "none");*/
	  }
	});

	$(".sona4").click(function() {
		var elem = $(".puntos4").text();
		if (elem == "...Leer Más") {
		  //Stuff to do when btn is in the read more state		
		  $("#text4").slideDown();
		  $(".puntos4").text("");		
		  /*$(".sona4").css("box-shadow", "2px 2px 4px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
		} else {
		  //Stuff to do when btn is in the read less state
		  $(".puntos4").text("...Leer Más");		
		  $("#text4").slideUp();
		  /*$(".sona4").css("box-shadow", "none");*/
		}
	  });
  
	  $(".sona5").click(function() {
		var elem = $(".puntos5").text();
		if (elem == "...Leer Más") {
		  //Stuff to do when btn is in the read more state		
		  $("#text5").slideDown();
		  $(".puntos5").text("");		
		  /*$(".sona5").css("box-shadow", "2px 2px 5px  #bbbab8, 10px 10px 10px rgb(151, 151, 151)");*/
		} else {
		  //Stuff to do when btn is in the read less state
		  $(".puntos5").text("...Leer Más");		
		  $("#text5").slideUp();
		  /*$(".sona4").css("box-shadow", "none");*/
		}
	  });

	  $(".sona6").click(function() {
		var elem = $(".puntos6").text();
		if (elem == "...Leer Más") {
		  //Stuff to do when btn is in the read more state		
		  $("#text6").slideDown();
		  $(".puntos6").text("");		
		  /*$(".sona6").css("box-shadow", "2px 2px 6px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
		} else {
		  //Stuff to do when btn is in the read less state
		  $(".puntos6").text("...Leer Más");		
		  $("#text6").slideUp();
		  /*$(".sona4").css("box-shadow", "none");*/
		}
	  });
		  
	  $(".sona7").click(function() {
		var elem = $(".puntos7").text();
		if (elem == "...Leer Más") {
		  //Stuff to do when btn is in the read more state		
		  $("#text7").slideDown();
		  $(".puntos7").text("");		
		  /*$(".sona7").css("box-shadow", "2px 2px 7px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
		} else {
		  //Stuff to do when btn is in the read less state
		  $(".puntos7").text("...Leer Más");		
		  $("#text7").slideUp();
		  /*$(".sona4").css("box-shadow", "none");*/
		}
	  });
	  $(".sona8").click(function() {
		var elem = $(".puntos8").text();
		if (elem == "...Leer Más") {
		  //Stuff to do when btn is in the read more state		
		  $("#text8").slideDown();
		  $(".puntos8").text("");		
		  /*$(".sona8").css("box-shadow", "2px 2px 8px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
		} else {
		  //Stuff to do when btn is in the read less state
		  $(".puntos8").text("...Leer Más");		
		  $("#text8").slideUp();
		  /*$(".sona4").css("box-shadow", "none");*/
		}
	  });
	
	  $(".sona9").click(function() {
		var elem = $(".puntos9").text();
		if (elem == "...Leer Más") {
		  //Stuff to do when btn is in the read more state		
		  $("#text9").slideDown();
		  $(".puntos9").text("");		
		  /*$(".sona9").css("box-shadow", "2px 2px 9px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");*/
		} else {
		  //Stuff to do when btn is in the read less state
		  $(".puntos9").text("...Leer Más");		
		  $("#text9").slideUp();
		  /*$(".sona4").css("box-shadow", "none");*/
		}
	  });
  });