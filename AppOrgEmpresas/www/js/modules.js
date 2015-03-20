var name = "Organización Empresas";


function headerHome(){
    document.writeln('<div data-role="header" data-theme="b">'+
                '<a href="#info" data-role="button" data-icon="info"'+
                   'data-iconpos="notext" class="ui-btn-right">Info</a>'+
                '<h1>'+name+'</h1>'+
         '</div>'
    );
}


function header(){
    document.writeln('<div data-role="header" data-theme="b">'+
                '<a href="#" data-rel="back" data-role="button" data-icon="arrow-l"'+
                   'data-iconpos="notext" class="ui-btn-left">Info</a>'+
                '<a href="#home" data-role="button" data-icon="home"'+
                   'data-iconpos="notext" class="ui-btn-right">Info</a>'+
                '<h1>'+name+'</h1>'+
         '</div>'
    );
}
