
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

  total = json.feed.entry.length;

  variable = new Array();
  subvariable = new Array();
  vConcepto = new Array();
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
      };

      /*************************SUBVARIABLES!!!!!******************************/

      subvariable_tmp = "";
      for(k=i ; k<total && json.feed.entry[i].gsx$variable.$t == json.feed.entry[k].gsx$variable.$t; k++){
        //console.log(json.feed.entry[k].gsx$subvariable.$t);
        //console.log("i = "+json.feed.entry[i].gsx$variable.$t+ "; k = "+json.feed.entry[k].gsx$variable.$t);

        //Si la subvariable no es vacía...
        if(json.feed.entry[k].gsx$subvariable.$t != ""){
          //Si la subvariable no es igual a la anterior...
          if(subvariable_tmp != json.feed.entry[k].gsx$subvariable.$t){
            //Añadimos las subvariables
            context_conceptos.variable[j].subvariables.push(
              {nombre_subvariable: json.feed.entry[k].gsx$subvariable.$t})
            subvariable_tmp = json.feed.entry[k].gsx$subvariable.$t;


            /*************************** CONCEPTOS ********************************/
            /*!!!!Revisar!!!! no se añaden conceptos sin subvariable


            */
            for(l=k ; l<total && json.feed.entry[k].gsx$subvariable.$t == json.feed.entry[l].gsx$subvariable.$t ; l++){
              //console.log("k = "+json.feed.entry[k].gsx$subvariable.$t+ "; l = "+json.feed.entry[l].gsx$subvariable.$t);
              //console.log(k +" -> "+json.feed.entry[l].gsx$concepto.$t);
              vConcepto.push({nombre_concepto: json.feed.entry[l].gsx$concepto.$t})

            }
            //console.log(vConcepto);
            context_conceptos.variable[j].subvariables.push(
              {concepto: vConcepto});
            vConcepto=[];

            /************************** FIN CONCEPTOS *****************************/



          }





        }


      }
      //console.log(context_conceptos.variable[j]);
      /***********************FIN_SUBVARIABLES*********************************/

      j++;
    }







  }

  //console.log(variable);
  //context_conceptos.variable[0].subvariable[0] = {nombre: "pepe"};
  //console.log(context_conceptos.variable[0]);
  console.log(context_conceptos.variable);

}



/***************************************************/
