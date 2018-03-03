let posicionAleatoria = 0;


function init_aleatoriosAprendidos(){
    siguienteAleatoriosAprendidos();
}

function siguienteAleatoriosAprendidos(){
    posicionAleatoria = Math.floor(Math.random() * posicion) + 0;
    visible = false;
    $(".posicion").html((posicionAleatoria+1)+"/"+objeto.sentences.length);
     $(".englishContent").hide();
    imprimir(posicionAleatoria);
}


