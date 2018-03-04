var peliSeleccionada;
/**
 * Carga la pagina.
*/
function cargarPagina(){
  crearCartelera();
  addEvent();
  window.location.hash = '#titulo';
}
/**
 * Crea los carteles.
*/
function crearCartelera(){
  for(var aux = 0 ; aux < jsonPeliculas.length ; aux++){
    crearCartel(aux);
  }
}
/**
 * Recibe el id del cartel y lo monta.
 * @param {int} id 
 */
function crearCartel(id){
    var divpeli = document.createElement('div');
      divpeli.setAttribute("id", id);
      var clase = "col-xs-12 col-md-2 elegir";
        divpeli.setAttribute("class", clase);
        divpeli.setAttribute("tabindex", 0);
        divpeli.setAttribute('aria-labelledby',"t"+id+" p"+id);

      var img = document.createElement('img');
        img.setAttribute("src", "img/"+jsonPeliculas[id]['imagen']);
        img.setAttribute('aria-labelledby',"p"+peliculas);
        img.setAttribute('alt',jsonPeliculas[id]['sinopsis']);

        divpeli.appendChild(img);
        
        document.getElementById('peliculas').appendChild(divpeli);
}

function addEvent(){
  $( document ).ready(function() {
    $('#seleccion').hide();
    $(".elegir").click(function(){
      peliSeleccionada = jsonPeliculas[$(this).attr('id')];
      localStorage.setItem('peliSeleccionada', JSON.stringify(peliSeleccionada));
      window.location.href = 'elegir.html';
    });
  });
}

function validarEmail(email) {
    var isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return isEmail.test(String(email).toLowerCase());
}

function validarNumero(telf){
  if(telf.length < 1){
    telf = 0;
  }
  var istelf = false;
  if(telf == undefined){
    telf = parseInt(telf);
    var phoneno = /^\d{10}$/;
    if(telf.value.match(phoneno)){
        istelf = true;
      }
  }
  return telf;
}

function validarNombre(nombre){
  return /^[A-Za-z\s]+$/.test(nombre);
}
