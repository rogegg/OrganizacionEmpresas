
total = 0;
var context = new Object();
context.name = "Organización Empresas"
var context_menu = new Object();
var context_conceptos = new Object();



function leerAsignaturas(json) {
  asig = new Array();
  cod = new Array();
  context.asignatura = new Array();
  total = json.feed.entry.length;
  for(i=0; i<total; i++){
    asig[i] = json.feed.entry[i].gsx$asignatura.$t;
    cod[i] = json.feed.entry[i].gsx$codigoasignatura.$t;
    context.asignatura[i] = {nombre: asig[i], codigo: cod[i]};
  }
}


function leerMenu(json) {
  menu = new Array();
  context_menu.menu = new Array();
  total = json.feed.entry.length;
  for(i=0; i<total; i++){
    menu[i] = json.feed.entry[i].gsx$menu.$t;
    context_menu.menu[i] = { nombre_menu: menu[i]}
  }
}



function leerConceptos(json) {
  context_conceptos.variable = new Array();
  context_conceptos.subvariable = new Array();
  context_conceptos.concepto = new Array();
  context_conceptos.definicion = new Array();
  context_conceptos.ejemplo = new Array();

  total = json.feed.entry.length;

  variable = new Array();
  subvariable = new Array();
  concepto = new Array();
  subvariable = new Array();

  variable_tmp = "";
  for(i=0, j=0;i<total;i++){

    context_conceptos.variable[j]
    //No incluimos variables repetidas en el vector variable.
    if(variable_tmp != json.feed.entry[i].gsx$variable.$t){
      variable_tmp = json.feed.entry[i].gsx$variable.$t;

      //Estructura de cada variable
      context_conceptos.variable[j] = {
              nombre_variable: json.feed.entry[i].gsx$variable.$t,
              subvariables: []
              //Meter subvariables en la estructura
      };

      k=i;
      for(; json.feed.entry[i].gsx$subvariable.$t == json.feed.entry[2].gsx$subvariable.$t; k++){
        context_conceptos.variable[j].subvariables.push(
          {nombre_subvariable: json.feed.entry[i].gsx$subvariable.$t}
        )
      }


      /****************************SUBVARIABLES!!!!!**********************************/
      //Añadimos las subvariables

      //Mientras variable[i] coincida con variable[k] -> guardamos subvariables
      l=0;
      for(k=i; json.feed.entry[i].gsx$variable.$t == json.feed.entry[k].gsx$subvariable.$t && k<total; k++){
        //if(subvariable_tmp != ""){
          subvariable[l] = json.feed.entry[k].gsx$subvariable.$t; //<----- no coge valores!

          context_conceptos.variable[j].subvariable[0] = { nombre_subvariable: subvariable[l] };
          l++;
        //}
      }





      console.log(context_conceptos.variable[j]);
      //console.log(context_conceptos.subvariable[j]);
      /***********************************************************/
      j++;
    }







  }

  //console.log(variable);
  //context_conceptos.variable[0].subvariable[0] = {nombre: "pepe"};
  //console.log(context_conceptos.variable[0]);
  //console.log(context_conceptos.variable);
  console.log(json.feed.entry[12].gsx$subvariable.$t);



}



/***************************************************/
