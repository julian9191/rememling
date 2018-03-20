
let palabraActual = {};

function init_palabraActual(){
    if(palabras.length>0){
        siguientePalabra();
        return;
    }
    
    ruta = "https://wordbitweb.000webhostapp.com//word-app.php?&callback=1";   
     $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        url: ruta,
        success: function(data){
            palabraActual = data;
            imprimirPalabraActual();
        },
        error: function(data){
            alert("Error obteniendo la palabra");
        }
    });
    
}

function imprimirPalabraActual(){
    $(".posicion").html(palabraActual.idwords);
    $(".spanish").html(palabraActual.spanish);
    $(".english").html(palabraActual.english);
    $(".sentence").html(palabraActual.sentence);
}

function palabraActualAprendida(){

    if (!confirm("Está seguro de que quiere marcar esta palabra como aprendida?"))
    {
        return;
    }

    ruta = "https://wordbitweb.000webhostapp.com//update-app.php?idwords="+palabraActual.idwords+"&callback=1";   
     $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        url: ruta,
        success: function(data){
            alert(data);
            init_palabraActual();
        },
        error: function(data){
            alert("Error obteniendo la palabra");
        }
    });
}

function sonarPalabraActual(opcion){
    var texto = "";
    if(opcion==1){
        texto = encodeURIComponent(palabraActual.english);
        
    }else{
        texto = encodeURIComponent(palabraActual.sentence);
    }
    if(texto!=""){
        var  url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q="+texto;
        $(".audio").attr("src", url).get(0).play();
    }
    
     
}
