var pagesMapper = {}
var paginaActual="en-orden.html";

$(document).ready(function(){
    
    pagesMapper = {
      "en-orden.html": init_enOrden,
      "aleatorios-aprendidos.html": init_aleatoriosAprendidos/*,
      "todos-aleatorios.html": init_todosAleatorios*/
    }
    
    pagesMapper[paginaActual]();
    
});

function changePage(page){
    fn.load(page);
    pagesMapper[page]();
    paginaActual = page;
}
