#include <iostream>
#include <math.h>
#include <iomanip>

using namespace std;

#define MAX 10 // (non più in uso) iterazioni massime da svolgere
#define EPS 0.000001 // threshold per il controllo dell'errore


// Metodo babilonese per l'approssimazione della radice quadrata
double babilonese(double num, int iterazioni){

    double Q, Qprec;
    int n = 0;

    Qprec = num / 2;
    for( n = 0; n < iterazioni; n++) {
        Q = (Qprec + num / Qprec) / 2;
        Qprec = Q;
    }

    return Q;

}


// Metodo con controllo di errore per l'approssimazione della radice quadrata
double errore(double num, int iterazioni){

    double Q, Qprec, errore;
    int n, esci = 0;

    Qprec = num / 2;
    for( n = 0; n < iterazioni && !esci; n++){
        Q = (Qprec + num / Qprec) / 2;
        errore = fabs((Q - Qprec) / Q);
        if(errore < EPS){
            esci = 1;
        } else {
            Qprec = Q;
        }

    }

    if(n > iterazioni){
        printf("\nNumero iterazioni eccessivo\n");
    }

    return Q;

}

// Metodo ricorsivo
double ricorsivo(double a, double x1){
    if(fabs(x1 - a/x1) / 2 >= EPS){
        x1 = (x1 + a/x1) / 2;
        return ricorsivo(a, x1);
    } else{
        return x1;
    }
}

// Metodi proposti da Newton -----------------------------------------------

// Metodo delle tangenti
double tangenti(double a, int iterazioni){
    int volte = 0;
    double x = 1.0;
    for(volte = 0; volte <= iterazioni; volte++){
        x = (x / 2) + (a / (2 * x));
    }
    return x;
}


// Funzione che restituisce una tabella
void tabella (double numero, int iterazioni){

    const char separator = ' '; // Separatore tre caselle
    const int wordWidth = 18; // Larghezza di ogni casella contente una stringa (testo)
    const int width = 18; // Larghezza di ogni casella contente un numero (int/double)
    double n2 = numero / 2;

    // Controllo che verifica che il numero inserito sia positivo
    while(numero <= 0){

        cout << "Numero non valido, inserire un numero positivo: ";
        cin >> numero;

    }

    // Header della tabella
    cout << "\nI risultati sono:\n\n";
    cout << left << setw(wordWidth) << setfill(separator) << "Iterazioni"; // Iterazioni svolte
    cout << left << setw(wordWidth) << setfill(separator) << "sqrt()"; // Math.sqrt()
    cout << left << setw(wordWidth) << setfill(separator) << "Babilonese"; // Algortimmo Babilonese
    cout << left << setw(wordWidth) << setfill(separator) << "Errore"; // Algoritmo Errore
    cout << left << setw(wordWidth) << setfill(separator) << "Ricorsivo";
    cout << "\n";

    // Riga contente i risultati
    cout << left << setw(width) << setfill(separator) << iterazioni;
    cout << left << setw(width) << setfill(separator) << sqrt(numero);
    cout << left << setw(width) << setfill(separator) << babilonese(numero, iterazioni);
    cout << left << setw(width) << setfill(separator) << errore(numero, iterazioni);
    cout << left << setw(width) << setfill(separator) << ricorsivo(numero, n2);


    // Metodi proposti da Newton
    cout << "\n\nOra vedremo i metodi proposti da Newton:\n";
    cout << left << setw(wordWidth) << setfill(separator) << "Iterazioni"; // Iterazioni svolte
    cout << left << setw(wordWidth) << setfill(separator) << "sqrt()"; // Math.sqrt()
    cout << left << setw(wordWidth) << setfill(separator) << "Tangenti"; // Metodo delle tangenti
    cout << "\n";

    cout << left << setw(width) << setfill(separator) << iterazioni;
    cout << left << setw(width) << setfill(separator) << sqrt(numero);
    cout << left << setw(width) << setfill(separator) << tangenti(numero, iterazioni);
    

}



int main(){

    double numero;
    int iterazioni;

    cout << "Calcolo approsimato della radice quadrata\n";
    cout << "\n     Inserisci un numero positivo: ";
    cin >> numero; // Inserimento radicando

    cout << "\n     Inserisci il numero di iterazioni da effettuare: ";
    cin >> iterazioni; // Inserimento iterazioni

    tabella(numero, iterazioni); // Stampa tabella con risultati
 
}