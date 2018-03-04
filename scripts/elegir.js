var peliSeleccionada;
var salaSeleccionada;
var butacasSeleccionadas = 0;
var laSala;
/** 
 * Inicia la carga iniciar, al entrar en la página elegir.
*/
function cargarPagina(){
    peliSeleccionada = JSON.parse(localStorage['peliSeleccionada']);
    console.log(peliSeleccionada);
    montarVentana();
    addEvent();
    eventForm();
    $('.precioButaca').text((peliSeleccionada.precio).toFixed(2)+' €');
}
/**
 * Inicia la carga al entrar en la pagina pago.
*/
function cargarPaginaPago(){
    butacasSeleccionadas = localStorage['butacasSeleccionadas'];
    peliSeleccionada = JSON.parse(localStorage['peliSeleccionada']);
    montarDetalles();
    $('.precioButaca').text((peliSeleccionada.precio).toFixed(2)+' €');
    $('.cantidadButacas').text(butacasSeleccionadas);
    $('.precioTotal').text((peliSeleccionada.precio * butacasSeleccionadas).toFixed(2)+' €');
}
/** 
 * Actualiza el precio.
*/
function actualizarPrecio(){
    butacasSeleccionadas = 0;
    for(var a = 0 ; a < salaSeleccionada.length ; a++){
        if(salaSeleccionada[a].cliente == 'proceso'){
            butacasSeleccionadas++;
        }
    }
    $('.cantidadButacas').text(butacasSeleccionadas);
    $('.precioTotal').text((peliSeleccionada.precio * butacasSeleccionadas).toFixed(2)+' €');
}
/**
 * Añade los eventos.
*/
function addEvent(){
    $( document ).ready(function() {
        $("li>input").click(function(){
            desbloquearSala($(this));
        });
        $("#anteriorSala").click(function(){
            activarUnTab('tab-detalles');
        });
        $("#anteriorPago").click(function(){
            activarUnTab('tab-sala');
        });
        $("#siguienteDetalles").click(function(){
            activarUnTab('tab-sala');
        });
        $("#siguienteSala").click(function(){
            activarUnTab('tab-pago');
        });
        $("svg").click(function(){
            desbloquearPago()
        });
      });
}
/**
 * Activa un tabs.
 * @param {string} tab nombre del tab que se activa. 
 */
function activarUnTab(tab){
    $('.tabs-li').removeClass('active');
    $('#'+tab).parent().addClass('active');
}
/**
 * Desbloquea el tab de la sala.
 * @param {Object} sala 
 */
function desbloquearSala(sala){
    $('.asientos').remove();
    montarSala(sala.val());
    $("#siguienteDetalles").removeClass("disabled");
    $("#tab-sala").removeClass("not-active");
    actualizarPrecio();
}
/** 
 * Desbloque el tab del pago.
*/
function desbloquearPago(){
    if(butacasSeleccionadas > 0){
        $("#tab-pago").removeClass("not-active");
        $("#siguienteSala").removeClass("disabled");
    } else{
        $("#tab-pago").addClass("not-active");
        $("#siguienteSala").addClass("disabled");
    }
}
/** 
 * Muestra los detalles, rellenando los campos.
*/
function montarDetalles(){
    $('#horario').remove();
    $('#tituloPeli').text(peliSeleccionada.titulo);
    $('#imagenPeli').attr('src', "img/"+peliSeleccionada.imagen);
    $('#sinopsisPeli').text(peliSeleccionada.sinopsis);
    $('.precioButaca').text(peliSeleccionada.precio);
}
/**
 * Monta la ventana.
*/
function montarVentana(){
    montarDetalles();
    var divpeli = document.createElement('input');
    var clase = "col-xs-12 col-md-2 elegir";
        divpeli.setAttribute("class", clase);
        divpeli.setAttribute("tabindex", 0);
    var losHorarios = JSON.parse(peliSeleccionada.reproduccion);
    for(var a = 0 ; a < losHorarios.length ; a++){        
        var lista = document.createElement('li');
        var radio = document.createElement('input');
            radio.setAttribute("type", 'radio');
            radio.setAttribute("name", 'horario');
            radio.setAttribute("value", losHorarios[a].horario);
            lista.appendChild(radio);
            lista.appendChild(document.createTextNode(' '+losHorarios[a].horario));
            document.getElementById("listaHorario").appendChild(lista);
    }
  }
  /**
   * Monta la sala con los asientos.
   * @param {string} horario 
   */
  function montarSala(horario){
    var reproducciones = JSON.parse(peliSeleccionada.reproduccion);
    for(var a = 0 ; a < reproducciones.length ; a++){
        if(reproducciones[a].horario == horario){
            console.log(reproducciones[a].sala);
            $('#salaSeleccionada').text(reproducciones[a].sala);
            seleccionarSala(reproducciones[a].sala);
        }
    }
    montarAsientos();
  }
  /**
   * Monta los asientos.
  */
  function montarAsientos(){
    var use;
    var svgns = "http://www.w3.org/2000/svg";
    for(var a = 0 ; a < salaSeleccionada.length ; a++){
        use = document.createElementNS(svgns,"use");
        use.setAttributeNS(null,"id", a);
        use.setAttributeNS(null,"class", 'asientos');
        use.setAttributeNS(null,"href", '#primero');
        use.setAttributeNS(null,"title", salaSeleccionada[a].fila);
        use.setAttributeNS(null,"onclick", 'changeColor(this)');
        use.setAttributeNS(null,"x", salaSeleccionada[a].x);
        use.setAttributeNS(null,"y", salaSeleccionada[a].y);
        if(salaSeleccionada[a].cliente == "proceso"){
            use.setAttributeNS(null,"fill", 'green');
        } else if(salaSeleccionada[a].cliente != null){
            use.setAttributeNS(null,"fill", 'red');
        } else{
            use.setAttributeNS(null,"fill", 'lightcyan');
        }
        use.setAttributeNS(null,"width", "51");
        use.setAttributeNS(null,"height", "50");
        document.getElementById("mysvg").appendChild(use);
    }
  }
  /**
   * Selecciona la sala para cargar los datos, predeterminado.
   * @param {String} sala 
   */
  function seleccionarSala(sala){
    laSala = sala;
    if(sala == "Sala A"){
        salaSeleccionada = SalaA;
    }
    if(sala == "Sala B"){
        salaSeleccionada = SalaB;
    }
      cargarDatos();
  }
  /**
   * Cambia el estado del asiento.
   * @param {Object} my 
   */
  function changeColor(my){
    var color = 'lightcyan';
    if(salaSeleccionada[my.getAttribute('id')].cliente == 'proceso'){
        color = 'lightcyan';
        salaSeleccionada[my.getAttribute('id')].cliente = null;
        butacasSeleccionadas--;
    } else if(salaSeleccionada[my.getAttribute('id')].cliente != null){
        color = 'red';
    } else if(salaSeleccionada[my.getAttribute('id')].cliente == null){
        color = 'green';
        salaSeleccionada[my.getAttribute('id')].cliente = 'proceso';
        butacasSeleccionadas++;
    }
    my.setAttribute('fill', color);
    $('.cantidadButacas').text(butacasSeleccionadas);
    $('.precioTotal').text((peliSeleccionada.precio * butacasSeleccionadas).toFixed(2)+' €');
  }
/**
 * Guarda los datos de la sala.
 */
function guardarDatos(){
    localStorage.setItem("butacasSeleccionadas", butacasSeleccionadas);
    for(var a = 0 ; a < salaSeleccionada.length ; a++){
        if(salaSeleccionada[a].cliente == 'proceso'){
            salaSeleccionada[a].cliente = jsonCliente;
        }
    }
    localStorage.setItem(laSala+"-"+peliSeleccionada.titulo, JSON.stringify(salaSeleccionada));
    window.location.href = 'pago.html';
}
/**
 * Carga los datos de la sala.
*/
function cargarDatos(){
    if(localStorage[laSala+"-"+peliSeleccionada.titulo] != null){
        var json = localStorage[laSala+"-"+peliSeleccionada.titulo];
        salaSeleccionada = JSON.parse(json);
    }
}
