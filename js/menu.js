

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