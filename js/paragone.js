window.onload = function(){
    alert("Tutti i sistemi funzionano");
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


function tabella(){

    var iterazioni = document.getElementById("selezione").value;

    var table = document.getElementById("tabella");
    var body = document.createElement('tbody');

    for(var i = 0; i < iterazioni; i++){

        var tr = document.createElement("tr");
        for(var j = 0; j < 4; j++){

            if (i == (iterazioni) && j == 3) {
                break;
            }
            else {

                var td = document.createElement("td");
                switch(j){

                    case 0:
                        td.innerHTML = i;
                        tr.appendChild(td);
                        break;
                    
                    case 1:
                        td.innerHTML = Babilonese(9, 100);
                        tr.appendChild(td);
                        break;
                    
                    case 2:
                        td.innerHTML = errore(9, 100);
                        tr.appendChild(td);
                        break;

                    case 3:
                        td.innerHTML = 0;
                        tr.appendChild(td);
                }
                
            }      
            
        }
        body.appendChild(tr);
    }

    table.appendChild(body);

}