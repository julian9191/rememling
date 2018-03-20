
let palabraActual = {};

function init_palabraActual(){
    if(palabras.length>0){
        siguientePalabra();
        return;
    }
    
    ruta = "https://wordbitweb.000webhostapp.com/data-app.php?callback=1";   
     $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        url: ruta,
        success: function(data){
            palabraActual = data;
        },
        error: function(data){
            alert("Error obteniendo la palabra");
        }
    });
    
}

/*function siguientePalabraActual(){

    posicionPalabras = Math.floor(Math.random() * (posicionesNoUsadasPalabras.length-1)) + 0;
    posicionesNoUsadasPalabras.splice(posicionPalabras, 1);
    
    if(posicionesNoUsadasPalabras.length == 0){
        posicionesNoUsadasPalabras = palabras.slice();
    }
    
    
    visible = false;
    var index = palabras.indexOf(posicionesNoUsadasPalabras[posicionPalabras]);
    if (index > -1) {
        $(".posicion").html((index+1)+"/"+(palabras.length-1));
    }else{
         $(".posicion").html("");
    }
    
     $(".englishContent").hide();
    imprimirPalabra(posicionPalabras);
}

function imprimirPalabraActual(p){
    $(".spanish").html(posicionesNoUsadasPalabras[p].spanish);
    $(".english").html(posicionesNoUsadasPalabras[p].english);
    $(".sentence").html(posicionesNoUsadasPalabras[p].sentence);
}

function sonarPalabraActual(opcion){
    var texto = "";
    if(opcion==1){
        texto = encodeURIComponent(posicionesNoUsadasPalabras[posicionPalabras].english);
        
    }else{
        texto = encodeURIComponent(posicionesNoUsadasPalabras[posicionPalabras].sentence);
    }
    if(texto!=""){
        var  url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q="+texto;
        $(".audio").attr("src", url).get(0).play();
    }
    
     
}*/
