window.onload = function(){
    //alert("Tutti i sistemi funzionano");
}

const EPS = 0.00001;

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

function Errore(num, iterazioni){

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

function Tangenti(num, iterazioni){

    var volte = 0;
    var x = 1.0;
    for(volte = 0; volte <= iterazioni; volte++){
        x = (x / 2) + (num / (2 * x));
    }

    return x;

}


function tabella(){

    var confronti = document.getElementById("selezione").value;
    var iterazioni = document.getElementById("iterazioni").value;
    var radicando = document.getElementById("radicando").value;

    var table = document.getElementById("tabella");

    table.querySelectorAll("tbody").forEach((tbody, i ) => {
        if(i == 0){
            table.removeChild(tbody);
        }
    });

    var body = document.createElement('tbody');

    for(var i = 0; i < confronti; i++){

        var tr = document.createElement("tr");
        for(var j = 0; j < 5; j++){

            if (i == (confronti) && j == 4) {
                break;
            }
            else {

                var td = document.createElement("td");
                switch(j){

                    case 0:
                        td.innerHTML = i + 1;
                        tr.appendChild(td);
                        break;
                    
                    case 1:
                        td.innerHTML = Babilonese(radicando, iterazioni);
                        tr.appendChild(td);
                        break;
                    
                    case 2:
                        td.innerHTML = Errore(radicando, iterazioni);
                        tr.appendChild(td);
                        break;

                    case 3:

                        td.innerHTML = Tangenti(radicando, iterazioni);
                        tr.appendChild(td);
                    
                    case 4:

                        td.innerHTML = "Da compilare";
                        tr.appendChild(td);

                    case 5:

                        td.innerHTML = Math.sqrt(radicando);
                        tr.appendChild(td);
                }
                
            }      
            
        }
        body.appendChild(tr);
    }

    table.appendChild(body);

}