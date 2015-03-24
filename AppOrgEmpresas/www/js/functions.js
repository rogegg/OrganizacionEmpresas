asig = new Array();
total = 0;
var context = new Object();
context.name = "Organización Empresas"

function leerAsignaturas(json) {
  context.asignatura = new Array();
  total = json.feed.entry.length;
  for(i=0; i<total; i++){
    asig[i] = json.feed.entry[i].gsx$asignatura.$t;
    context.asignatura[i] = {nombre: asig[i]};
  }
}





/***************************************************/
