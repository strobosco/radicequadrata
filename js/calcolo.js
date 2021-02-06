// Funzioni per le sezioni apribili

function babiloneseCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[0].classList.toggle("active");

    var div = document.getElementsByClassName("babilonese-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}

function erroreCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[1].classList.toggle("active");

    var div = document.getElementsByClassName("errore-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}

function tangentiCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[2].classList.toggle("active");

    var div = document.getElementsByClassName("tangenti-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}

function inversoCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[3].classList.toggle("active");

    var div = document.getElementsByClassName("inverso-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}


//--------------------------------------------------------
// Funzioni per il calcolo della radice
const EPS = 0.00001;


function Babilonese(){

    radicando = document.getElementById("radicando-babilonese").value;

    if(radicando <= 0){
        alert("Inserire un radicando positivo: ")
        document.getElementById("radicando-babilonese").focus();
    } else {

        ripetizioni = document.getElementById("ripetizioni-babilonese").value;

        var Q, Qprec, n;
        n = 0;
        Qprec = radicando / 2;
        for(n = 0; n < ripetizioni; n++){
            Q = (Qprec + radicando / Qprec) / 2;
            Qprec = Q;
        }

        statement = "La radice approssimata e': " + Q;
        document.getElementById("risultato-babilonese"). innerHTML = statement;

    }
}

function Errore(){

    radicando = document.getElementById("radicando-errore").value;

    if(radicando <= 0){
        alert("Inserire un radicando positivo: ")
        document.getElementById("radicando-errore").focus();
    } else {

        ripetizioni = document.getElementById("ripetizioni-errore").value;

        var Q, Qprec, errore;
        var n, esci = 0;
        Qprec = radicando / 2;
        for(n = 0; n < ripetizioni && !esci; n++){
            Q = (Qprec + radicando / Qprec) / 2;
            errore = Math.abs((Q - Qprec) / Q);
            if(errore < EPS) {
                esci = 1;
            } else {
                Qprec = Q;
            }
        }

        statement = "La radice approssimata e': " + Q;
        document.getElementById("risultato-errore"). innerHTML = statement;
    
    }
}

// da definire tangenti e inverso

function Tangenti(){

    radicando = document.getElementById("radicando-tangenti").value;

    if(radicando <= 0){
        alert("Inserire un radicando positivo: ")
        document.getElementById("radicando-tangenti").focus();
    } else {

        ripetizioni = document.getElementById("ripetizioni-tangenti").value;

        var volte = 0;
        var x = 1.0;
        for(volte = 0; volte <= ripetizioni; volte++){
            x = (x / 2) + (radicando / (2 * x));
        }

        statement = "La radice approssimata e': " + x;
        document.getElementById("risultato-tangenti"). innerHTML = statement;
    
    }

}