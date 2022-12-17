// const age = prompt('In che anno sei nato?');
// console.log("L'utente è nato nell'anno: ", age);

const nome = prompt('Come ti chiami?');     //richiesta nome
console.log("L'Utente si chiama:" , nome);

const cognome = prompt("Qual'è il tuo cognome?");      //richiesta cognome
console.log("Il cognome dell'Utente è:" , cognome);

console.log("Il nome intero dell'Utente è:", cognome, nome);   //lettura nome intero


const colorePreferito = prompt(`
    ${nome} qual'è il tuo colore preferito? 
    `);     //richiesta colore preferito, chiamando l'utente per nome
console.log(`
Il colore preferito di ${nome} è:`, colorePreferito);   //lettura colore preferito, chiamando l'utente per nome

const annoCorrente = 2022;

const annoNascita = prompt (`
    ${nome} in quale anno sei nato/a?
`)
console.log(`L'anno di nascita di ${nome } è: ${annoNascita}`);

const annoEtà = annoCorrente - annoNascita;
console.log(`L'età di ${nome } è: ${annoEtà}`)

document.writeln(`
${nome} ${cognome} ${colorePreferito} ${annoEtà}
`);     //scrittura nome cogonme colore preferito età
console.log(`
${nome} ${cognome} ${colorePreferito} ${annoEtà}, scritto correttamente!!
`);     //lettura scrittura

//  seconda scrittura tutta attaccata
document.writeln(`
${nome}${cognome}${colorePreferito}${annoEtà}
`);     //scrittura nomecogonmecolorepreferitoetà
console.log(`
${nome}${cognome}${colorePreferito}${annoEtà}, scritto correttamente, tutto attaccato!!
`);     //lettura scrittura