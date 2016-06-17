var Subestacion;
var jsvMBName1 = "Equipo 1";
var PuestaServicioMB = "2016";
var MarcaMB = "Elvison";
var OrdendeCompraMB = "12600002";
var NumeroSerieMB = "120002";
var TipoMB = "Verical";
var VBatMB = 3;
var ZBatMB = 4;
var ZPATMB = 5;
var TCAFMB = 6;


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
    
});

function cheqInitState(){}