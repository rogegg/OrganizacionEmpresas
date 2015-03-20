var mio;
asignatura = new Array();
total = 0;

function leerAsignaturas(json) {
  total = json.feed.entry.length;
  for(i=0; i<total; i++){
    asignatura[i] = json.feed.entry[i].gsx$asignatura.$t;

  }
}



/***************************************************/
