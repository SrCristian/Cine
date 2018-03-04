/**
 * Json de las peliculas
*/
var jsonPeliculas = [
  {
    titulo: "Insidious: La Última Llave",
    sinopsis: "En esta nueva película de terror, en la que vemos de nuevo a Lin Shaye como la Doctora Elise Rainier, la brillante parapsicóloga se enfrenta a su más personal y aterradora caza hasta la fecha, que sucede en su antigua casa familiar.",
    imagen: "insidius.jpg",
    precio: 3.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '11:15'},{sala:'Sala B', horario: '01:30'}])
  },
  {
    titulo: "120 Pulsaciones por Minuto",
    sinopsis: "Principio de los años 90. Mientras que el SIDA lleva casi diez años matando, los militantes de Act Up-Paris multiplican las acciones para luchar contra la indiferencia general. Recién llegado al grupo, Nathan quedará conmocionado por la radicalidad de Sean, que consume sus últimas fuerzas en la acción.",
    imagen: "120pulsaciones.jpg",
    precio: 4.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '12:15'},{sala:'Sala B', horario: '02:30'}])
  },
  {
    titulo: "El Gran Showman",
    sinopsis: "EL GRAN SHOWMAN es un audaz y original musical que celebra el nacimiento de la industria del espectáculo y la sensación de asombro que nos domina cuando los sueños se hacen realidad. Inspirado en la ambición y la imaginación de P.T. Barnum, “El Gran Showman” narra la historia de un visionario que salió de la nada para crear un fascinante espectáculo que se convirtió en una sensación mundial. “El Gran Showman” está dirigido por un realizador novel y apasionante, Michael Gracey, con canciones de los ganadores del Premio de la Academia Benj Pasek y Justin Paul (“La La Land”), e interpretado por el candidato al Premio de la Academia Hugh Jackman. A Jackman le acompañan Michelle Williams, candidata a idéntico galardón, Zendaya, Zac Efron y Rebecca Ferguson.",
    imagen: "granShowMan.jpg",
    precio: 3.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '13:15'},{sala:'Sala B', horario: '03:30'}])
  },
  {
    titulo: "Jumanji: Bienvenidos a la Jungla",
    sinopsis: "En la cinta original, Alan Parrish, un niño de 7 años, desaparece misteriosamente de su casa de despues de lanzar los dados de un juego de mesa. 26 años después, dos niños llegan a este pueblo para vivir en la misma casa donde Alan desapareció y descubren el juego. Mágicos acontecimientos suceden con cada tirada: mosquitos, monos, elefantes, rinocerontes, leones y un cazador aparecen en la casa como si vinieran del juego...",
    imagen: "jumanji.jpg",
    precio: 3.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '14:15'},{sala:'Sala B', horario: '04:30'}])
  },
  {
    titulo: "Perfectos Desconocidos",
    sinopsis: "Una extraña inquietud parece haberse apoderado de la ciudad. El tráfico se colapsa, las urgencias de los hospitales están a rebosar, los perros aúllan intuyendo el peligro que se aproxima: es el eclipse de Luna. Su poderoso influjo afecta también a los protagonistas de esta historia.",
    imagen: "desconocidos.jpg",
    precio: 1.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '15:15'},{sala:'Sala B', horario: '05:30'}])
  },
  {
    titulo: "Ferdinand",
    sinopsis: "FERDINAND es la historia de un toro con un corazón aún más grande que él. Después de que le confundan con una peligrosa bestia, es capturado y apartado de su hogar. Decidido a volver con su familia, se une a un equipo de inadaptados con los que vivirá una gran aventura. Ferdinand nos enseña que no puedes juzgar a un toro por sus cuernos. De Blue Sky Studios y Carlos Saldanha, director de “Rio”, llega “Ferdinand”, una conmovedora y divertida comedia.",
    imagen: "ferdinand.jpg",
    precio: 3.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '16:15'},{sala:'Sala B', horario: '06:30'}])
  },
  {
    titulo: "Los Archivos del Pentágono",
    sinopsis: "En junio de 1971, el New York Times, el Washington Post y los principales periódicos de EE.UU. tomaron una valiente posición en favor de la libertad de expresión, informando sobre los documentos del Pentágono y el encubrimiento masivo de secretos por parte del gobierno que duró cuatro décadas.",
    imagen: "archivospentagono.jpg",
    precio: 3.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '17:15'},{sala:'Sala B', horario: '07:30'}])
  },
  {
    titulo: "El Instante Más Oscuro",
    sinopsis: "EL INSTANTE MÁS OSCURO, es una emocionante e inspiradora historia que tiene lugar en los días previos al comienzo de la Segunda Guerra Mundial. ",
    imagen: "instanteoscuro.jpg",
    precio: 3.8,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '18:15'},{sala:'Sala B', horario: '08:30'}])
  },
  {
    titulo: "The Jungle Bunch (La Panda de la Selva)",
    sinopsis: "Maurice, un pingüino criado como tigre, junto a sus amigos se proponen mantener el orden en la selva, como antes hizo su madre. Pero Igor, un malvado koala se lo va a poner difícil.",
    imagen: "pandajungla.jpg",
    precio: 4,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '19:15'},{sala:'Sala B', horario: '09:30'}])
  },
  {
    titulo: "Thi Mai. Rumbo a Vietnam",
    sinopsis: "THI MAI, RUMBO A VIETNAM es la divertida historia de amor de una madre que no quiere renunciar a su derecho de ser abuela y de cómo la esperanza, la amistad y las buenas personas que se encuentran por el camino (en cualquier lugar del mundo), siempre pueden con las desgracias.",
    imagen: "thimai.jpg",
    precio: 2.2,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '20:15'},{sala:'Sala B', horario: '21:30'}])
  },
  {
    titulo: "La forma del agua",
    sinopsis: "En un inquietante laboratorio de alta seguridad, durante la Guerra Fría, se produce una conexión insólita entre dos mundos, aparentemente alejados. La vida de la solitaria Elisa, trabajadora del laboratorio, cambia por completo cuando descubre un experimento clasificado como secreto. La cinta de Guillermo del Toro está protagonizada por Sally Hawkins, Michael Shannon, Richard Jenkins, Doug Jones, Michael Stuhlbarg y Octavia Spencer, y cuenta con una banda sonora creada por Alexandre Desplat.",
    imagen: "sombra_agua.jpg",
    precio: 5,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '20:18'},{sala:'Sala B', horario: '21:31'},{sala:'Sala B', horario: '21:59'}])
  },
  {
    titulo: "El gorrion rojo",
    sinopsis: "Cuando una lesión pone fin a su carrera, Dominika y su madre se enfrentan a un futuro oscuro e incierto. Por este motivo es manipulada para convertirse en la nueva recluta de una academia de espías, donde las agentes son llamadas “gorriones”.",
    imagen: "gorrion_rojo.jpg",
    precio: 4,
    reproduccion: JSON.stringify([{sala:'Sala A', horario: '20:19'},{sala:'Sala B', horario: '21:32'}])
  }
];

/**
 * Json cliente.
*/
var jsonCliente = {
  nombre: "",
  email: "",
  telefono: 0,
  cuenta: ""
};


/**
 * Json de las salas.
 */

var SalaA = [
  {
    "x": 1,
    "y": 0,
    "cliente":null,
    "fila": "1A"
  },
  {
    "x": 52,
    "y": 0,
    "cliente": null,
    "fila": "2A"
  },
  {
    "x": 103,
    "y": 0,
    "cliente":null,
    "fila": "3A"
  },
  {
    "x": 154,
    "y": 0,
    "cliente":null,
    "fila": "4A"
  },
  {
    "x": 205,
    "y": 0,
    "cliente":null,
    "fila": "5A"
  },
  {
    "x": 256,
    "y": 0,
    "cliente":null,
    "fila": "6A"
  },
  {
    "x": 307,
    "y": 0,
    "cliente":null,
    "fila": "7A"
  },
  {
    "x": 358,
    "y": 0,
    "cliente":null,
    "fila": "8A"
  },
  {
    "x": 409,
    "y": 0,
    "cliente":null,
    "fila": "9A"
  },
  {
    "x": 460,
    "y": 0,
    "cliente":null,
    "fila": "10A"
  },
  {
    "x": 1,
    "y": 52,
    "cliente":null,
    "fila": "1B"
  },
  {
    "x": 52,
    "y": 52,
    "cliente":null,
    "fila": "2B"
  },
  {
    "x": 103,
    "y": 52,
    "cliente":null,
    "fila": "3B"
  },
  {
    "x": 154,
    "y": 52,
    "cliente":null,
    "fila": "4B"
  },
  {
    "x": 307,
    "y": 52,
    "cliente":null,
    "fila": "7B"
  },
  {
    "x": 358,
    "y": 52,
    "cliente":null,
    "fila": "8B"
  },
  {
    "x": 409,
    "y": 52,
    "cliente":null,
    "fila": "9B"
  },
  {
    "x": 460,
    "y": 52,
    "cliente":null,
    "fila": "10B"
  },
  {
    "x": 1,
    "y": 103,
    "cliente":null,
    "fila": "1C"
  },
  {
    "x": 52,
    "y": 103,
    "cliente":null,
    "fila": "2C"
  },
  {
    "x": 103,
    "y": 103,
    "cliente":null,
    "fila": "3C"
  },
  {
    "x": 154,
    "y": 103,
    "cliente":null,
    "fila": "4C"
  },
  {
    "x": 307,
    "y": 103,
    "cliente":null,
    "fila": "6C"
  },
  {
    "x": 358,
    "y": 103,
    "cliente":null,
    "fila": "8C"
  },
  {
    "x": 409,
    "y": 103,
    "cliente":null,
    "fila": "9C"
  },
  {
    "x": 460,
    "y": 103,
    "cliente":null,
    "fila": "10C"
  },
  {
    "x": 1,
    "y": 154,
    "cliente":null,
    "fila": "1D"
  },
  {
    "x": 52,
    "y": 154,
    "cliente":null,
    "fila": "2D"
  },
  {
    "x": 103,
    "y": 154,
    "cliente":null,
    "fila": "3D"
  },
  {
    "x": 154,
    "y": 154,
    "cliente":null,
    "fila": "4D"
  },
  {
    "x": 307,
    "y": 154,
    "cliente":null,
    "fila": "7D"
  },
  {
    "x": 358,
    "y": 154,
    "cliente":null,
    "fila": "8D"
  },
  {
    "x": 409,
    "y": 154,
    "cliente":null,
    "fila": "9D"
  },
  {
    "x": 460,
    "y": 154,
    "cliente":null,
    "fila": "10D"
  },
  {
    "x": 1,
    "y": 205,
    "cliente":null,
    "fila": "1E"
  },
  {
    "x": 52,
    "y": 205,
    "cliente":null,
    "fila": "2E"
  },
  {
    "x": 103,
    "y": 205,
    "cliente":null,
    "fila": "3E"
  },
  {
    "x": 154,
    "y": 205,
    "cliente":null,
    "fila": "4E"
  },
  {
    "x": 307,
    "y": 205,
    "cliente":null,
    "fila": "7E"
  },
  {
    "x": 358,
    "y": 205,
    "cliente":null,
    "fila": "8E"
  },
  {
    "x": 409,
    "y": 205,
    "cliente":null,
    "fila": "9E"
  },
  {
    "x": 460,
    "y": 205,
    "cliente":null,
    "fila": "10E"
  },
  {
    "x": 1,
    "y": 256,
    "cliente":null,
    "fila": "1F"
  },
  {
    "x": 52,
    "y": 256,
    "cliente":null,
    "fila": "2F"
  },
  {
    "x": 103,
    "y": 256,
    "cliente":null,
    "fila": "3F"
  },
  {
    "x": 154,
    "y": 256,
    "cliente":null,
    "fila": "4F"
  },
  {
    "x": 307,
    "y": 256,
    "cliente":null,
    "fila": "7F"
  },
  {
    "x": 358,
    "y": 256,
    "cliente":null,
    "fila": "8F"
  },
  {
    "x": 409,
    "y": 256,
    "cliente":null,
    "fila": "9F"
  },
  {
    "x": 460,
    "y": 256,
    "cliente":null,
    "fila": "10F"
  },
  {
    "x": 1,
    "y": 307,
    "cliente":null,
    "fila": "1G"
  },
  {
    "x": 52,
    "y": 307,
    "cliente":null,
    "fila": "2G"
  },
  {
    "x": 103,
    "y": 307,
    "cliente":null,
    "fila": "3G"
  },
  {
    "x": 154,
    "y": 307,
    "cliente":null,
    "fila": "4G"
  },
  {
    "x": 307,
    "y": 307,
    "cliente":null,
    "fila": "7G"
  },
  {
    "x": 358,
    "y": 307,
    "cliente":null,
    "fila": "8G"
  },
  {
    "x": 409,
    "y": 307,
    "cliente":null,
    "fila": "9G"
  },
  {
    "x": 460,
    "y": 307,
    "cliente":null,
    "fila": "10G"
  },
  {
    "x": 1,
    "y": 358,
    "cliente":null,
    "fila": "1H"
  },
  {
    "x": 52,
    "y": 358,
    "cliente":null,
    "fila": "2H"
  },
  {
    "x": 103,
    "y": 358,
    "cliente":null,
    "fila": "3H"
  },
  {
    "x": 154,
    "y": 358,
    "cliente":null,
    "fila": "4H"
  },
  {
    "x": 307,
    "y": 358,
    "cliente":null,
    "fila": "7H"
  },
  {
    "x": 358,
    "y": 358,
    "cliente":null,
    "fila": "8H"
  },
  {
    "x": 409,
    "y": 358,
    "cliente":null,
    "fila": "9H"
  },
  {
    "x": 460,
    "y": 358,
    "cliente":null,
    "fila": "10H"
  }
];

var SalaB = [
  {
    "x": 1,
    "y": 0,
    "cliente":null,
    "fila": "1A"
  },
  {
    "x": 52,
    "y": 0,
    "cliente": null,
    "fila": "2A"
  },
  {
    "x": 103,
    "y": 0,
    "cliente":null,
    "fila": "3A"
  },
  {
    "x": 154,
    "y": 0,
    "cliente":null,
    "fila": "4A"
  },
  {
    "x": 205,
    "y": 0,
    "cliente":null,
    "fila": "5A"
  },
  {
    "x": 256,
    "y": 0,
    "cliente":null,
    "fila": "6A"
  },
  {
    "x": 307,
    "y": 0,
    "cliente":null,
    "fila": "7A"
  },
  {
    "x": 358,
    "y": 0,
    "cliente":null,
    "fila": "8A"
  },
  {
    "x": 409,
    "y": 0,
    "cliente":null,
    "fila": "9A"
  },
  {
    "x": 460,
    "y": 0,
    "cliente":null,
    "fila": "10A"
  },
  {
    "x": 1,
    "y": 52,
    "cliente":null,
    "fila": "1B"
  },
  {
    "x": 52,
    "y": 52,
    "cliente":null,
    "fila": "2B"
  },
  {
    "x": 103,
    "y": 52,
    "cliente":null,
    "fila": "3B"
  },
  {
    "x": 154,
    "y": 52,
    "cliente":null,
    "fila": "4B"
  },
  {
    "x": 307,
    "y": 52,
    "cliente":null,
    "fila": "7B"
  },
  {
    "x": 358,
    "y": 52,
    "cliente":null,
    "fila": "8B"
  },
  {
    "x": 409,
    "y": 52,
    "cliente":null,
    "fila": "9B"
  },
  {
    "x": 460,
    "y": 52,
    "cliente":null,
    "fila": "10B"
  },
  {
    "x": 1,
    "y": 103,
    "cliente":null,
    "fila": "1C"
  },
  {
    "x": 52,
    "y": 103,
    "cliente":null,
    "fila": "2C"
  },
  {
    "x": 103,
    "y": 103,
    "cliente":null,
    "fila": "3C"
  },
  {
    "x": 154,
    "y": 103,
    "cliente":null,
    "fila": "4C"
  },
  {
    "x": 307,
    "y": 103,
    "cliente":null,
    "fila": "6C"
  },
  {
    "x": 358,
    "y": 103,
    "cliente":null,
    "fila": "8C"
  },
  {
    "x": 409,
    "y": 103,
    "cliente":null,
    "fila": "9C"
  },
  {
    "x": 460,
    "y": 103,
    "cliente":null,
    "fila": "10C"
  },
  {
    "x": 1,
    "y": 205,
    "cliente":null,
    "fila": "1E"
  },
  {
    "x": 52,
    "y": 205,
    "cliente":null,
    "fila": "2E"
  },
  {
    "x": 103,
    "y": 205,
    "cliente":null,
    "fila": "3E"
  },
  {
    "x": 154,
    "y": 205,
    "cliente":null,
    "fila": "4E"
  },
  {
    "x": 307,
    "y": 205,
    "cliente":null,
    "fila": "7E"
  },
  {
    "x": 358,
    "y": 205,
    "cliente":null,
    "fila": "8E"
  },
  {
    "x": 409,
    "y": 205,
    "cliente":null,
    "fila": "9E"
  },
  {
    "x": 460,
    "y": 205,
    "cliente":null,
    "fila": "10E"
  },
  {
    "x": 1,
    "y": 256,
    "cliente":null,
    "fila": "1F"
  },
  {
    "x": 52,
    "y": 256,
    "cliente":null,
    "fila": "2F"
  },
  {
    "x": 103,
    "y": 256,
    "cliente":null,
    "fila": "3F"
  },
  {
    "x": 154,
    "y": 256,
    "cliente":null,
    "fila": "4F"
  },
  {
    "x": 307,
    "y": 256,
    "cliente":null,
    "fila": "7F"
  },
  {
    "x": 358,
    "y": 256,
    "cliente":null,
    "fila": "8F"
  },
  {
    "x": 409,
    "y": 256,
    "cliente":null,
    "fila": "9F"
  },
  {
    "x": 460,
    "y": 256,
    "cliente":null,
    "fila": "10F"
  },
  {
    "x": 1,
    "y": 307,
    "cliente":null,
    "fila": "1G"
  },
  {
    "x": 52,
    "y": 307,
    "cliente":null,
    "fila": "2G"
  },
  {
    "x": 103,
    "y": 307,
    "cliente":null,
    "fila": "3G"
  },
  {
    "x": 154,
    "y": 307,
    "cliente":null,
    "fila": "4G"
  },
  {
    "x": 307,
    "y": 307,
    "cliente":null,
    "fila": "7G"
  },
  {
    "x": 358,
    "y": 307,
    "cliente":null,
    "fila": "8G"
  },
  {
    "x": 409,
    "y": 307,
    "cliente":null,
    "fila": "9G"
  },
  {
    "x": 460,
    "y": 307,
    "cliente":null,
    "fila": "10G"
  },
  {
    "x": 1,
    "y": 358,
    "cliente":null,
    "fila": "1H"
  },
  {
    "x": 52,
    "y": 358,
    "cliente":null,
    "fila": "2H"
  },
  {
    "x": 103,
    "y": 358,
    "cliente":null,
    "fila": "3H"
  },
  {
    "x": 154,
    "y": 358,
    "cliente":null,
    "fila": "4H"
  },
  {
    "x": 307,
    "y": 358,
    "cliente":null,
    "fila": "7H"
  },
  {
    "x": 358,
    "y": 358,
    "cliente":null,
    "fila": "8H"
  },
  {
    "x": 409,
    "y": 358,
    "cliente":null,
    "fila": "9H"
  },
  {
    "x": 460,
    "y": 358,
    "cliente":null,
    "fila": "10H"
  }
];

var SalaC = [
  {
    "x": 1,
    "y": 0,
    "cliente":null,
    "fila": "1A"
  },
  {
    "x": 52,
    "y": 0,
    "cliente": null,
    "fila": "2A"
  },
  {
    "x": 103,
    "y": 0,
    "cliente":null,
    "fila": "3A"
  },
  {
    "x": 154,
    "y": 0,
    "cliente":null,
    "fila": "4A"
  },
  {
    "x": 205,
    "y": 0,
    "cliente":null,
    "fila": "5A"
  },
  {
    "x": 256,
    "y": 0,
    "cliente":null,
    "fila": "6A"
  },
  {
    "x": 307,
    "y": 0,
    "cliente":null,
    "fila": "7A"
  },
  {
    "x": 358,
    "y": 0,
    "cliente":null,
    "fila": "8A"
  },
  {
    "x": 409,
    "y": 0,
    "cliente":null,
    "fila": "9A"
  },
  {
    "x": 460,
    "y": 0,
    "cliente":null,
    "fila": "10A"
  },
  {
    "x": 1,
    "y": 52,
    "cliente":null,
    "fila": "1B"
  },
  {
    "x": 52,
    "y": 52,
    "cliente":null,
    "fila": "2B"
  },
  {
    "x": 103,
    "y": 52,
    "cliente":null,
    "fila": "3B"
  },
  {
    "x": 154,
    "y": 52,
    "cliente":null,
    "fila": "4B"
  },
  {
    "x": 307,
    "y": 52,
    "cliente":null,
    "fila": "7B"
  },
  {
    "x": 358,
    "y": 52,
    "cliente":null,
    "fila": "8B"
  },
  {
    "x": 409,
    "y": 52,
    "cliente":null,
    "fila": "9B"
  },
  {
    "x": 460,
    "y": 52,
    "cliente":null,
    "fila": "10B"
  },
  {
    "x": 1,
    "y": 103,
    "cliente":null,
    "fila": "1C"
  },
  {
    "x": 52,
    "y": 103,
    "cliente":null,
    "fila": "2C"
  },
  {
    "x": 103,
    "y": 103,
    "cliente":null,
    "fila": "3C"
  },
  {
    "x": 154,
    "y": 103,
    "cliente":null,
    "fila": "4C"
  },
  {
    "x": 307,
    "y": 103,
    "cliente":null,
    "fila": "6C"
  },
  {
    "x": 358,
    "y": 103,
    "cliente":null,
    "fila": "8C"
  },
  {
    "x": 409,
    "y": 103,
    "cliente":null,
    "fila": "9C"
  },
  {
    "x": 460,
    "y": 103,
    "cliente":null,
    "fila": "10C"
  },
  {
    "x": 1,
    "y": 154,
    "cliente":null,
    "fila": "1D"
  },
  {
    "x": 52,
    "y": 154,
    "cliente":null,
    "fila": "2D"
  },
  {
    "x": 103,
    "y": 154,
    "cliente":null,
    "fila": "3D"
  },
  {
    "x": 154,
    "y": 154,
    "cliente":null,
    "fila": "4D"
  },
  {
    "x": 307,
    "y": 154,
    "cliente":null,
    "fila": "7D"
  },
  {
    "x": 358,
    "y": 154,
    "cliente":null,
    "fila": "8D"
  },
  {
    "x": 409,
    "y": 154,
    "cliente":null,
    "fila": "9D"
  },
  {
    "x": 460,
    "y": 154,
    "cliente":null,
    "fila": "10D"
  },
  {
    "x": 1,
    "y": 205,
    "cliente":null,
    "fila": "1E"
  },
  {
    "x": 52,
    "y": 205,
    "cliente":null,
    "fila": "2E"
  },
  {
    "x": 103,
    "y": 205,
    "cliente":null,
    "fila": "3E"
  },
  {
    "x": 154,
    "y": 205,
    "cliente":null,
    "fila": "4E"
  },
  {
    "x": 307,
    "y": 205,
    "cliente":null,
    "fila": "7E"
  },
  {
    "x": 358,
    "y": 205,
    "cliente":null,
    "fila": "8E"
  },
  {
    "x": 409,
    "y": 205,
    "cliente":null,
    "fila": "9E"
  },
  {
    "x": 460,
    "y": 205,
    "cliente":null,
    "fila": "10E"
  },
  {
    "x": 1,
    "y": 256,
    "cliente":null,
    "fila": "1F"
  },
  {
    "x": 52,
    "y": 256,
    "cliente":null,
    "fila": "2F"
  },
  {
    "x": 103,
    "y": 256,
    "cliente":null,
    "fila": "3F"
  },
  {
    "x": 154,
    "y": 256,
    "cliente":null,
    "fila": "4F"
  },
  {
    "x": 307,
    "y": 256,
    "cliente":null,
    "fila": "7F"
  },
  {
    "x": 358,
    "y": 256,
    "cliente":null,
    "fila": "8F"
  },
  {
    "x": 409,
    "y": 256,
    "cliente":null,
    "fila": "9F"
  },
  {
    "x": 460,
    "y": 256,
    "cliente":null,
    "fila": "10F"
  },
  {
    "x": 1,
    "y": 307,
    "cliente":null,
    "fila": "1G"
  },
  {
    "x": 52,
    "y": 307,
    "cliente":null,
    "fila": "2G"
  },
  {
    "x": 103,
    "y": 307,
    "cliente":null,
    "fila": "3G"
  },
  {
    "x": 154,
    "y": 307,
    "cliente":null,
    "fila": "4G"
  },
  {
    "x": 307,
    "y": 307,
    "cliente":null,
    "fila": "7G"
  },
  {
    "x": 358,
    "y": 307,
    "cliente":null,
    "fila": "8G"
  },
  {
    "x": 409,
    "y": 307,
    "cliente":null,
    "fila": "9G"
  },
  {
    "x": 460,
    "y": 307,
    "cliente":null,
    "fila": "10G"
  },
  {
    "x": 52,
    "y": 358,
    "cliente":null,
    "fila": "2H"
  },
  {
    "x": 103,
    "y": 358,
    "cliente":null,
    "fila": "3H"
  },
  {
    "x": 154,
    "y": 358,
    "cliente":null,
    "fila": "4H"
  },
  {
    "x": 307,
    "y": 358,
    "cliente":null,
    "fila": "7H"
  },
  {
    "x": 358,
    "y": 358,
    "cliente":null,
    "fila": "8H"
  },
  {
    "x": 409,
    "y": 358,
    "cliente":null,
    "fila": "9H"
  }
];