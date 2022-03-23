let userName = prompt("Per iniziare dimmi come ti chiami");
console.log("Il tuo nome è" + " " + userName);

let userSurname = prompt("Bene, ora dimmi il tuo cognome");
console.log("Il tuo bel cognome è" + " " + userSurname);

let prefColor = prompt("Scegliamo ora un colore. Dimmi quale ti piace")
console.log("Il tuo colore preferito è" + " " + prefColor);

let secureSuffix = 21;
console.log("Il numero segreto è" + " " + secureSuffix);

document.getElementById("password").innerHTML += " " + userName + userSurname + prefColor + secureSuffix;
