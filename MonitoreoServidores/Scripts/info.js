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
var stop;
var maxVBatMB = VBatMB * 1.3;
var maxZBatMB = ZBatMB * 1.3;
var maxZPATMB = ZPATMB * 1.3;
var minVBatMB = VBatMB * 0.7;
var minZBatMB = ZBatMB * 0.7;
var minZPATMB = ZPATMB * 0.7;
var aux;
var aux1;
var aux2;
var aux3;
var aux4;
var aux5;
var parar1;
var parar2;
var parar3;
var parar4;
var parar5;
var parar6;


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

    var x = parseFloat(parseFloat(document.getElementById("ZBat").innerHTML) + 1.3);
    document.getElementById("ZBat").innerHTML = x.toFixed(2);

    x = parseFloat(parseFloat(document.getElementById("ZPAT").innerHTML) + 0.1);
    document.getElementById("ZPAT").innerHTML = x.toFixed(2);

    stopInterval();

    cambiarImagen();

    aux = parseFloat(document.getElementById("VBat").innerHTML);
}


function cambiarImagen() {
    if (parseFloat(document.getElementById("VBat").innerHTML) > VBatMB) {
        document.getElementById('PPATAl').src = "images/NO.gif";
    }
    else if ((parseFloat(document.getElementById("VBat").innerHTML) > minVBatMB) &&
        (parseFloat(document.getElementById("VBat").innerHTML) <= VBatMB)) {
        document.getElementById('PPATAl').src = "images/undefined.jpg";
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
        document.getElementById("opcionesAdvertencia").disabled = false;
    }
    else if ((parseFloat(document.getElementById("ZBat").innerHTML) > minZBatMB) &&
    (parseFloat(document.getElementById("ZBat").innerHTML) <= ZBatMB)) {        
        document.getElementById('NPATAl').src = "images/undefined.jpg";
        document.getElementById("opcionesAdvertencia").disabled = false;
    }
    else {        
        document.getElementById('NPATAl').src = "images/SI.gif";
        document.getElementById("opcionesAdvertencia").disabled = false;
    }



    if (parseFloat(document.getElementById("ZPAT").innerHTML) > ZPATMB) {
        document.getElementById('HZBatAl').src = "images/NO.gif";
    }
    else if ((parseFloat(document.getElementById("ZPAT").innerHTML) > minZPATMB) &&
        (parseFloat(document.getElementById("ZPAT").innerHTML) <= ZZPATMB)) {
        document.getElementById('HZBatAl').src = "images/undefined.jpg";
    }
    else {
        document.getElementById("opciones").disable = false;
        document.getElementById('HZBatAl').src = "images/SI.gif";
    }
}


function ValidaOpcion(combo) {
    var indice = combo.selectedIndex;
    if ((parseFloat(document.getElementById("ZBat").innerHTML) > ZBatMB) ||
       (parseFloat(document.getElementById("ZPAT").innerHTML) > ZPATMB) ||
       (parseFloat(document.getElementById("VBat").innerHTML) > VBatMB)) {
        if (combo.options[indice].value == 1) {
            document.getElementById('opciones').disabled = true;
            parar1 = setInterval('restar()', 1000);
        }
        if (combo.options[indice].value == 2) {
            document.getElementById('opciones').disabled = true;
            parar2 = setInterval('restar1()', 1000);
        }
        if (combo.options[indice].value == 3) {
            document.getElementById('opciones').disabled = true;
            parar3 = setInterval('restar2()', 1000);
        }
    }
}


function restar() {
    aux = parseFloat(document.getElementById('VBat').innerHTML) - 0.5;    

    if (aux <= VBatMB/2) {
        clearInterval(parar1);
    }  
    else {
        document.getElementById('VBat').innerHTML = aux.toFixed(2);
    }

    cambiarImagen();
}


function restar1() {
    aux1 = parseFloat(document.getElementById('VBat').innerHTML) - 1;

    if (aux1 <= VBatMB/2) {
        clearInterval(parar2);        
    }
    else {        
        document.getElementById('VBat').innerHTML = aux1.toFixed(2);
    }

    cambiarImagen();
}


function restar2() {
    aux2 = parseFloat(document.getElementById('VBat').innerHTML) - 0.1;

    if (aux2 <= VBatMB/2) {
        clearInterval(parar3);
    }
    else {
        document.getElementById('VBat').innerHTML = aux2.toFixed(2);
    }

    cambiarImagen();
}

//************************************************************************
function ValidaOpcionAdvertencia(combo) {
    var indice = combo.selectedIndex;
    if ( ( (parseFloat(document.getElementById("ZBat").innerHTML) > minZBatMB) && (parseFloat(document.getElementById("ZBat").innerHTML) <= ZBatMB) ) ||
       ((parseFloat(document.getElementById("ZPAT").innerHTML) > minZPATMB) && (parseFloat(document.getElementById("ZPAT").innerHTML) <= ZPATMB)) ||
       ((parseFloat(document.getElementById("VBat").innerHTML) > minVBatMB) && (parseFloat(document.getElementById("VBat").innerHTML) <= VBatMB))) {
        if (combo.options[indice].value == 1) {
            document.getElementById('opcionesAdvertencia').disabled = true;
            parar4 = setInterval('restar3()', 1000);
        }
        if (combo.options[indice].value == 2) {
            document.getElementById('opcionesAdvertencia').disabled = true;
            parar5 = setInterval('restar4()', 1000);
        }
        if (combo.options[indice].value == 3) {
            document.getElementById('opcionesAdvertencia').disabled = true;
            parar6 = setInterval('restar5()', 1000);
        }
    }
}


function restar3() {
    aux3 = parseFloat(document.getElementById('ZBat').innerHTML) - 0.5;

    if (aux3 <= ZBatMB / 2) {
        clearInterval(parar4);
    }
    else {
        document.getElementById('ZBat').innerHTML = aux3.toFixed(2);
    }

    cambiarImagen();
}


function restar4() {
    aux4 = parseFloat(document.getElementById('ZBat').innerHTML) - 1;

    if (aux4 <= ZBatMB / 2) {
        clearInterval(parar5);
    }
    else {
        document.getElementById('ZBat').innerHTML = aux4.toFixed(2);
    }

    cambiarImagen();
}


function restar5() {
    aux5 = parseFloat(document.getElementById('ZBat').innerHTML) - 0.1;

    if (aux5 <= ZBatMB / 2) {
        clearInterval(parar6);
    }
    else {
        document.getElementById('ZBat').innerHTML = aux5.toFixed(2);
    }

    cambiarImagen();
}
//************************************************************************


function ocultarRuedaOpcion2() {
    $("#ruedaopcion2").hide();
}


function reordenarListaVBat() {
    var textoTemporal = document.getElementById('opciones').options[1].innerHTML;
    document.getElementById('opciones').options[1].innerHTML = document.getElementById('opciones').options[2].innerHTML;
    document.getElementById('opciones').options[2].innerHTML = textoTemporal;
    document.getElementById('opciones').selectedIndex = 0;
}


function getMB04Reg() {
    //esto es para la fecha
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1; //January is 0!

    var yyyy = hoy.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    var hoy = dd + '/' + mm + '/' + yyyy;
  
    var x = document.getElementById('POITable').insertRow(1);
   
    var c1 = x.insertCell(0);
    var c2 = x.insertCell(1);
    var c3 = x.insertCell(2);
   
    // c1.innerHTML = document.getElementById('VBat').innerHTML;
    c1.innerHTML = hoy;
    c2.innerHTML = "Temperatura de aceite de la cuba";
    c3.innerHTML = document.getElementById('VBat').innerHTML;
   // c2.innerHTML = "Temperatura de aceite de la cuba";
}




    function popLayer(id) { }

    function hideLayer() { }