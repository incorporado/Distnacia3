var Subestacion;
var jsvMBName1 = "Equipo 1";
var PuestaServicioMB = "2016";
var MarcaMB = "Elvison";
var OrdendeCompraMB = "12600002";
var NumeroSerieMB = "120002";
var TipoMB = "Vertical";
var VBatMB = 10;
var ZBatMB = 20;
var ZPATMB = 30;
var TCAFMB = 40;
var stop;
var maxVBatMB;  
var maxZBatMB;
var maxZPATMB;
var aux;
var aux1;
var parar1;
var parar2;

function inicializarEncabezado(codigo) {
    if (codigo == 1) {
        Subestacion = "Subestacion CABA Sur";
    } 
    else if (codigo == 2) {
        Subestacion = "Subestacion CABA Norte";
    }
    else if (codigo == 3){
        Subestacion = "Subestacion CABA Moreno";
    }
    else if (codigo == 4) {
            Subestacion = "Subestacion CABA La Plata";
    }
};


$(document).ready(function () {
    document.getElementById("VBat").innerHTML = 0;
    document.getElementById("ZBat").innerHTML = 0;
    document.getElementById("ZPAT").innerHTML = 0;
    maxVBatMB = VBatMB * 1.3;
    maxZBatMB = ZBatMB * 1.3;
    maxZPATMB = ZPATMB * 1.3;
    var i = 0;
    ocultarRuedaOpcion2();
    stop = setInterval('loop()', 1000);
    
});

function stopInterval() {    
    if ((parseFloat(document.getElementById("VBat").innerHTML) > maxVBatMB) || (parseFloat(document.getElementById("ZBat").innerHTML) > maxZBatMB) || (parseFloat(document.getElementById("ZPAT").innerHTML) > maxZPATMB)) {
        clearInterval(stop);        
    }
}

function cheqInitState() { }

function loop() {

    document.getElementById("VBat").innerHTML = parseFloat(parseFloat(document.getElementById("VBat").innerHTML) + 1);

    var x = parseFloat(parseFloat(document.getElementById("ZBat").innerHTML) + 0.1);
    document.getElementById("ZBat").innerHTML = x.toFixed(2);

    x = parseFloat(parseFloat(document.getElementById("ZPAT").innerHTML) + 0.01);
    document.getElementById("ZPAT").innerHTML = x.toFixed(2);

    stopInterval();

    cambiarImagen();

    aux = parseFloat(document.getElementById("VBat").innerHTML);
}

function cambiarImagen() {
    if (parseFloat(document.getElementById("VBat").innerHTML) > VBatMB) {
        document.getElementById('PPATAl').src = "images/NO.gif";
    }
    else {
        document.getElementById('opciones').disabled = false;
        var textoOpcionElegida = (document.getElementById('opciones').options[document.getElementById('opciones').selectedIndex].innerHTML).indexOf("RKM49");
        if (textoOpcionElegida > 0) {
            $('#ruedaopcion2').show();
            reordenarListaVBat();
            setTimeout('ocultarRuedaOpcion2()', 2000);
        }
        document.getElementById('PPATAl').src = "images/SI.gif";
    }

    if (parseFloat(document.getElementById("ZBat").innerHTML) > ZBatMB) {
        document.getElementById('NPATAl').src = "images/NO.gif";
    }
    else {
        document.getElementById("opciones").disable = false;
        document.getElementById('NPATAl').src = "images/SI.gif";
    }

    if (parseFloat(document.getElementById("ZPAT").innerHTML) > ZPATMB) {
        document.getElementById('HZBatAl').src = "images/NO.gif";
    }
    else {
        document.getElementById("opciones").disable = false;
        document.getElementById('HZBatAl').src = "images/SI.gif";
    }
}

function ValidaOpcion(combo) {
    var indice = combo.selectedIndex;
    if (combo.options[indice].value == 1) {
        document.getElementById('opciones').disabled = true;
        parar1 = setInterval('restar()', 1000);
    }
    if (combo.options[indice].value == 2) {
        document.getElementById('opciones').disabled = true;
        parar2 = setInterval('restar1()', 1000);        
    }
}

function restar() {
    aux = parseFloat(document.getElementById('VBat').innerHTML) - 0.1;    

    if (aux == VBatMB/2) {
        clearInterval(parar1);
    }  
    else {
        document.getElementById('VBat').innerHTML = aux.toFixed(2);
    }

    cambiarImagen();
}

function restar1() {
    aux1 = parseFloat(document.getElementById('VBat').innerHTML) - 1;

    if (aux1 == VBatMB/2) {
        clearInterval(parar2);        
    }
    else {        
        document.getElementById('VBat').innerHTML = aux1.toFixed(2);
    }

    cambiarImagen();
}

function ocultarRuedaOpcion2() {
    $("#ruedaopcion2").hide();
}

function reordenarListaVBat() {
    var textoTemporal = document.getElementById('opciones').options[1].innerHTML;
    document.getElementById('opciones').options[1].innerHTML = document.getElementById('opciones').options[2].innerHTML;
    document.getElementById('opciones').options[2].innerHTML = textoTemporal;
    document.getElementById('opciones').selectedIndex = 0;
}