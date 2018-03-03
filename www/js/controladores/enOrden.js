var posicion = -1;

function init_enOrden(){
    posicion = localStorage.getItem('posicion');
    if(posicion==null){
         posicion = -1;
    }else{
        posicion = posicion-1;
    }
    siguiente();
}


function siguiente(){
    cambiarPosicion(1);
     $(".englishContent").hide();
    imprimir(posicion);
}

function anterior(){
    cambiarPosicion(-1);
     $(".englishContent").hide();
    imprimir(posicion);
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
    $(".posicion").html((posicion+1)+"/"+objeto.sentences.length);
     
}

