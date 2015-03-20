
asignaturas = new Array();
total = 0;

function leerAsignaturas(json) {
  total = json.feed.entry.length;
  for(i=0; i<total; i++){
    asignaturas[i] = json.feed.entry[i].gsx$asignatura.$t;
  }
}






/***************************************************/
