function example() {
    let input = read()
    if (input.length === 0) {
        print("Keine Eingabe vorhanden...")
    } else {
        print(input)
    }
}

function aufgabe_02() { // soll auf Knopfdruck ausgeführt werden
    let numRead = parseInt(read())  // liest die Eingabe als Zahl
    let num = 15  // gesuchte Zahl

    if (num < numRead) {  // gesuchte Zahl ist kleiner
        print("Die Zahl ist kleiner")
    } else if (num > numRead) {  // gesuchte Zahl ist grösser
        print("Die Zahl ist grösser")
    } else {  // muss die gesuchte Zahl sein
        print("RICHTIG!!!")
    }
}



function aufgabe_01(){
    print("Hello World!")
}

function aufgabe_03(){

    let numSearch = 15



    let numRead = parseInt( read() )
    if ( numRead < numSearch ){
        print("Die gesuchte Zahl ist grösser")
    }

    if ( numRead > numSearch ){
        print("Die gesuchte Zahl ist kleiner")
    }

    if ( numRead === numSearch ){
        print("Du hast die Zahl gefunden")
    }

}

function aufgabe_04() {
    // Obergrenze von Eingabe auslesen
    let upperBound = parseInt(read())

    // Zähle von 0 bis zur Obergrenze
    // TODO: implement

    for ( let i = 0; i <= upperBound / 2; i++){
        print( 2*i )
    }
}



function aufgabe_07() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]
    
    for (let i = primes.length -2; i > 0; i--) {
        print( primes[i] )
    }
    
}

function aufgabe_08() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]

    for (let i = 0; i < primes.length /2; i++) {
        print( primes[i * 2] )
    }
}

function aufgabe_09() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]

    for (let i = primes.length -1; i >=0; i--) {
        print( primes[i] )
    }
}

function aufgabe_10() {
    // Liste der Primzahlen
    primes = [2, 3, 5, 7, 11, 13, 17, 19]

    for (let i = 0; i < primes.length; i++) {
        print( primes[i] )
    }
}

function example_string_to_list() 
{ let greeting = "Ivxon" 
let res = []
let greetingList = greeting.split("x")
 for ( let i = 0; i < greeting.length; i++ ) 
 { res.push( greeting[i] ) }
 if ( (greetingList.length >= 2))  print(greetingList)}


