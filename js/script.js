/* MERMAID FLOWCHART
A[Chiedo il nome all'utente] --> B{L'utente ha inserito il proprio nome?}
B -->|Si| C[Chiedo il cognome all'utente]
B --> |No| A
C --> D{L'utente ha inserito il cognome?}
D -->|Si| E[Chiedo il colore preferito all'utente]
D -->|No| C
E --> F{L'utente ha inserito il colore preferito?}
F -->|Si| G[Aggiungo variabile con un suffisso numerico]
F -->|No| E
G -->H[Stampo a schermo la password unendo nome, cognome, suffisso numerico]
H -->I[Fine]
*/

let userName = prompt("Per iniziare dimmi come ti chiami");
// console.log("Il tuo nome è" + " " + userName);

let userSurname = prompt("Bene, ora dimmi il tuo cognome");
// console.log("Il tuo bel cognome è" + " " + userSurname);

let prefColor = prompt("Scegliamo ora un colore. Dimmi quale ti piace")
// console.log("Il tuo colore preferito è" + " " + prefColor);

let secureSuffix = 21;
// console.log("Il numero segreto è" + " " + secureSuffix);

document.getElementById("password").innerHTML += " " + userName + userSurname + prefColor + secureSuffix;
