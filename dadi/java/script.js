/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?  */




var btn = document.getElementById('luck');

btn.addEventListener('click',

    function() {
        const player = (Math.floor(Math.random() * 6))
        const computer = (Math.floor(Math.random() * 6))


        if (computer > player) {
            console.log ("HAI PERSO!!!! il PC ha fatto:", computer, "TU:", player);
            document.getElementById("risultato").innerHTML = ("HAI PERSO!!!! il PC ha fatto:", computer, "TU:", player);
        }

        else if (player > computer){
        console.log ("HAI VINTO!!!! TU hai fatto:", player, "il PC:", computer);
        document.getElementById("risultato").innerHTML = ("HAI VINTO!!!! TU hai fatto:", player, "il PC:", computer);
        }
        
        else {
            document.getElementById("risultato").innerHTML = ("PAREGGIO");
        }

      
    });

