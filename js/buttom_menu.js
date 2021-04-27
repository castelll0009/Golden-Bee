var contador = 0;
$("label").click(function(){  
   contador = contador + 1;   
   if(  contador <= 1)  {
    $("#main-movil").css("width", "100%");
    $("#main-movil").css("background", " #e5e5e5");
    
   }else{
    $("#main-movil").css("width", "100px"); 
    $("#main-movil").css("background", "transparent");
    contador = 0;
   }
        
});