var Subestacion;
var jsvMBName1 = "Equipo 1";
var PuestaServicioMB = "2016";
var MarcaMB = "Elvison";
var OrdendeCompraMB = "12600002";
var NumeroSerieMB = "120002";
var TipoMB = "Vertical";
var VBatMB = 30;
var ZBatMB = 40;
var ZPATMB = 50;
var TCAFMB = 60;
var stop;
var maxVBatMB;  
var maxZBatMB;
var maxZPATMB;

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
    stop = setInterval('loop()', 1000);
    
});

function stopInterval() {
    
    if ((parseFloat(document.getElementById("VBat").innerHTML) > maxVBatMB) || (parseFloat(document.getElementById("ZBat").innerHTML) > maxZBatMB) || (parseFloat(document.getElementById("ZPAT").innerHTML) > maxZPATMB)) {
        clearInterval(stop);
        console.log("hola1");
    }
}

function cheqInitState() { }

function loop() {

    document.getElementById("VBat").innerHTML = parseFloat(parseFloat(document.getElementById("VBat").innerHTML) + 1);

    var x = parseFloat(parseFloat(document.getElementById("ZBat").innerHTML) + 0.1);
    document.getElementById("ZBat").innerHTML = x.toFixed(2);

    x = parseFloat(parseFloat(document.getElementById("ZPAT").innerHTML) + 0.01);
    document.getElementById("ZPAT").innerHTML = x.toFixed(2);

    console.log("hola2");
    stopInterval();
}