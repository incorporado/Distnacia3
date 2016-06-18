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
    $("#VBat").html(0);
    $("#VBat").html(0);
    $("#VBat").html(0);
    var i = 0;
    var j = 0;
    var k = 0;
    var maxVBatMB = VBatMB * 1.3;
    var maxZBatMB = ZBatMB * 1.3;
    var maxZPATMB = ZPATMB * 1.3;
    while (($("#VBat").html() < maxVBatMB) || ($("#ZBat").html() < maxZBatMB) || ($("#ZPAT").html() < maxZPATMB)) {
        $("#VBat").html(i);
        $("#ZBat").html(j);
        $("#ZPAT").html(k);
        i = i + 1;
        j = j + 0.1;
        k = k + 0.01;
    }
});

function cheqInitState(){}