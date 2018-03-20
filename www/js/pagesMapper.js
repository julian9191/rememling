var pagesMapper = {}
var paginaActual="en-orden.html";

$(document).ready(function(){
    
    pagesMapper = {
      "en-orden.html": init_enOrden,
      "aleatorios-aprendidos.html": init_aleatoriosAprendidos,
      "palabras.html": init_palabras,
      "palabra-actual.html": init_palabraActual
    }
    
    pagesMapper[paginaActual]();
    
});

function changePage(page){
    fn.load(page);
    pagesMapper[page]();
    paginaActual = page;
}
