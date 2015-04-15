
var total = 0;
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
    //No incluimos variables repetidas en el vector variable.
    if(variable_tmp != json.feed.entry[i].gsx$variable.$t){
      variable_tmp = json.feed.entry[i].gsx$variable.$t;

/*      //Estructura estática de ejemplo
      context_conceptos.variable[j] = {
        nombre_variable: json.feed.entry[i].gsx$variable.$t,
        subvariables:[]
         [
          {nombre_subvariable:"subvariable",
           conceptos:[
              {nombre_concepto:"concepto"},
              {nombre_concepto:"concepto2"},
              {nombre_concepto:"concepto3"}
           ]
          },
          {nombre_subvariable:"subvariable2",
           conceptos:[
              {nombre_concepto:"concepto"},
              {nombre_concepto:"concepto2"},
              {nombre_concepto:"concepto3"}
           ]
          }

        ]
      };
*/

      //Estructura de cada variable
      context_conceptos.variable[j] = {
        nombre_variable: json.feed.entry[i].gsx$variable.$t,
        subvariables:[]
      };

      /************************* SUBVARIABLES ******************************/
      subvariable_tmp = "";
      for(k=i ; k<total && json.feed.entry[i].gsx$variable.$t == json.feed.entry[k].gsx$variable.$t; k++){
        //Si la subvariable no es vacía...
        if(json.feed.entry[k].gsx$subvariable.$t != ""){
          //Si la subvariable no es igual a la anterior...
          if(subvariable_tmp != json.feed.entry[k].gsx$subvariable.$t){

            /*************************** CONCEPTOS ********************************/
            for(l=k ; l<total && json.feed.entry[k].gsx$subvariable.$t == json.feed.entry[l].gsx$subvariable.$t ; l++){
              vConcepto.push({nombre_concepto: json.feed.entry[l].gsx$concepto.$t,
                              definicion: String(json.feed.entry[l].gsx$definicion.$t),
                              ejemplo: String(json.feed.entry[l].gsx$ejemplo.$t)
              })
            }

            //Añadimos las subvariables y conceptos a las variables.
            context_conceptos.variable[j].subvariables.push(
              {nombre_subvariable: json.feed.entry[k].gsx$subvariable.$t,
                conceptos: vConcepto
              }
            );
            subvariable_tmp = json.feed.entry[k].gsx$subvariable.$t;

            vConcepto=[];
            /************************** FIN CONCEPTOS *****************************/
          }
        }
      }
      /***********************FIN_SUBVARIABLES*********************************/
      j++;
    }
  }


  console.log(context_conceptos.variable[3].subvariables[0]);
  console.log(context_conceptos.variable[3]);

}



/***************************************************/
