let posicionAleatoria = 0;
let posicionesUsadas = [];


function init_aleatoriosAprendidos(){
    siguienteAleatoriosAprendidos();
}

function sonarAleatorioAprendido(){
    sonar(posicionAleatoria);
}

function siguienteAleatoriosAprendidos(){
    
    do {
        posicionAleatoria = Math.floor(Math.random() * posicion) + 0;
    }
    while (posicionesUsadas.includes(posicionAleatoria));
    
    posicionesUsadas.push(posicionAleatoria);
    
    if(posicionesUsadas.length >= posicion){
        posicionesUsadas = [];
    }
    
    
    visible = false;
    $(".posicion").html((posicionAleatoria+1)+"/"+objeto.sentences.length);
     $(".englishContent").hide();
    imprimir(posicionAleatoria);
}


