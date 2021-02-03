const EPS = 0.00001;

window.onload = function(){
    //alert("Algoritmo Ricorsivo non ancora integrato");
}();

function compute(){
    radicando = document.getElementById("radicando").value; // get value of initial amount

    // check if amount is positive, if not alert user and focus on amount input
    if(radicando <= 0){
        alert("Inserire un radicando positivo: ")
        document.getElementById("radicando").focus();
    }
    else{
        ripetizioni = document.getElementById("ripetizioni").value; // get values of interest rate

        metodo = document.getElementById("metodo").value;

        var radice;
        if(metodo == "Metodo Babilonese"){
            radice = Babilonese(radicando, ripetizioni);
        }
        if(metodo == "Metodo con controllo errore"){
            radice = errore(radicando, ripetizioni);
        }
        if(metodo == "Algoritmo Ricorsivo"){
            radice = ricorsivo(radicando, iterazioni)
        }

        // final statement that contains all necessary information
        statement = "La radice approssimata e': " + radice;
        document.getElementById("risultato"). innerHTML = statement;
    }

}

function Babilonese(num, iterazioni){

    var Q, Qprec, n;
    n = 0;
    Qprec = num / 2;
    for(n = 0; n < iterazioni; n++){
        Q = (Qprec + num / Qprec) / 2;
        Qprec = Q;
    }

    return Q;

}

function errore(num, iterazioni){

    var Q, Qprec, errore;
    var n, esci = 0;
    Qprec = num / 2;
    for(n = 0; n < iterazioni && !esci; n++){
        Q = (Qprec + num / Qprec) / 2;
        errore = Math.abs((Q - Qprec) / Q);
        if(errore < EPS) {
            esci = 1;
        } else {
            Qprec = Q;
        }
    }

    return Q;

}

function ricorsivo(a, x1){ // algortimo ricorsivo da rivedere

    if((Math.abs(x1 - a/x1) / 2) >= EPS ){

        x1 = (x1 + a/x1) / 2;
        return radiceQuadrataErone(a, x1);

    } else {
        return x1;
    }

}