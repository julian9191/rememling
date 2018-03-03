var posicion = -1;
var visible = false;

$(document).ready(function(){
    posicion = localStorage.getItem('posicion');
    if(posicion==null){
         posicion = -1;
    }else{
        posicion = posicion-1;
    }
    siguiente();
    
});


function addTodoPicture() {
    navigator.camera.getPicture(addTodo, function() {
        alert("Failed to get camera.");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 100,
        targetHeight : 100
    });
}
function addTodo(camera_url) {
    var title = $("#todo-title").val();
    var body = $("#todo-body").val();
    var img_tag = "";
    if (camera_url) {
        img_tag = "<img src='" + camera_url + "'>";
    }
    $.mobile.changePage($("#list-page"));
    $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
    $("#todo-list").listview('refresh');
    
};

function mostrar(){
   var texto = encodeURIComponent(objeto.sentences[posicion].english);
   var  url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q="+texto;
   $("audio").attr("src", url).get(0).play();
}

function motrarTraduccion(){ 
    if(visible){
    	$("#englishContent").hide();
		visible = false;
	}else{
		$("#englishContent").show();
		visible = true;
	}
    
    
}

function imprimir(){
    $("#spanish").html(objeto.sentences[posicion].spanish);
    $("#english").html(objeto.sentences[posicion].english);
}

function siguiente(){
    cambiarPosicion(1);
     $("#englishContent").hide();
    imprimir();
}

function anterior(){
    cambiarPosicion(-1);
     $("#englishContent").hide();
    imprimir();
}

function cambiarPosicion(direccion){
    var posAux = posicion+direccion;
    if(direccion<0){
        if(posAux<0){
            posicion = objeto.sentences.length-1;
        }else{
            posicion = posAux;
        }
    }
    if(direccion>0){
        if(posAux>=objeto.sentences.length){
            posicion = 0;
        }else{
            posicion = posAux;
        }
    }
    localStorage.setItem('posicion', posicion);
    visible = false;
    $("#posicion").html((posicion+1)+"/"+objeto.sentences.length);
     
}

