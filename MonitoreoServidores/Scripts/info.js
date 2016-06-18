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
    var maxVBatMB = VBatMB * 1.3;
    var maxZBatMB = ZBatMB * 1.3;
    var maxZPATMB = ZPATMB * 1.3;
    while ((parseInt(document.getElementById("VBat").innerHTML) < maxVBatMB) && (parseInt(document.getElementById("ZBat").innerHTML) < maxZBatMB) && (parseInt(document.getElementById("ZPAT").innerHTML) < maxZPATMB)) {
        document.getElementById("VBat").innerHTML = parseInt(parseInt(document.getElementById("VBat").innerHTML) + 1);
        document.getElementById("ZBat").innerHTML = parseInt(parseInt(document.getElementById("ZBat").innerHTML) + 1);
        document.getElementById("ZPAT").innerHTML = parseInt(parseInt(document.getElementById("ZPAT").innerHTML) + 1);
    }
});

function cheqInitState(){}