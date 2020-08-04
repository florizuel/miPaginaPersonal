var database = firebase.database();
var experienciaLaboral = database.ref('informacionPersonal/experienciaLaboral/');
experienciaLaboral.on('value', function(snapshot) {
    var exp = snapshot.val()
    console.log(exp)
    cadena=""
    for(var i in exp){
        var elem=exp[i]
        cadena+="<li> " +"Empresa: "+ elem.empresa+"<br>"
        cadena+="Duración: "+ elem.desde+" - "+elem.hasta

        cadena+="</li>"
    }
    $(".ARellenar").html(cadena)

});    

var infoPersonal = database.ref('informacionPersonal/');

infoPersonal.once('value', function(snapshot) {

    var info = snapshot.val()

    $(".nombre").text(info.nombre)
    $(".mail").text(info.mail)
    $(".edad").text(info.edad)
    $(".estudios").text(info.estudios)
    $(".ciudad").text(info.ciudad)
});

var expLaboral = database.ref('experienciaLaboral/');

expLaboral.once('value', function(snapshot) {
    var exp = snapshot.val()
    
    cadena=""
    for(var i in exp){
        var elem=exp[i]
        cadena+="<ul> "+"Empresa: "+ elem.empresa+ "<br>"
        cadena+="Desde: "+ elem.desde
        cadena+="<br>"
        cadena+="Hasta: "+ elem.hasta
        cadena+="</ul>"
    }
    
    $(".experiencia").html(cadena)
});

var academico = database.ref('academico/');

academico.once('value', function(snapshot) {

    var info = snapshot.val()

    $(".secundaria").text(info.secundaria)
    $(".universidad1").text(info.universidad1)
    $(".universidad2").text(info.universidad2)
    $(".curso1").text(info.curso1)
    $(".curso2").text(info.curso2)
    $(".curso3").text(info.curso3)
});


var aptitudes = database.ref('aptitudes/');

aptitudes.once('value', function(snapshot) {

    var info = snapshot.val()

    $(".prog1").text(info.prog1)
    $(".prog2").text(info.prog2)
    $(".prog3").text(info.prog3)
    $(".manual").text(info.manual)
    $(".proceso").text(info.proceso)
});


$(".guardarTrabajo2").click((ev) => {
    const identificador = database.ref('experienciaLaboral/').push().key
    var data={
        empresa:$(".empresa2").val(),
        desde:$(".desde2").val(),
        hasta:$(".hasta2").val(),
        id: identificador
    }
        database.ref('experienciaLaboral/' + data.id).set(data);
})

function editarExp(id){
    $(".formularioTrabajos").show()
    $(".trabajos").text(id)
}

$(".editarTrabajo").click((ev) => {

    const identificador = $(".trabajos").text()
    var data = {
        empresa: $(".empresa").val(),
        desde:$(".desde").val(),
        hasta:$(".hasta").val(),
        id: identificador
    }
    database.ref('experienciaLaboral/' + data.id).set(data);
})