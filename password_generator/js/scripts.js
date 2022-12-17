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


document.writeln(`
${nome} ${cognome} ${colorePreferito} 21
`);     //scrittura nome cogonme colore preferito + numero
console.log(`
${nome} ${cognome} ${colorePreferito} 21, scritto correttamente!!
`);     //lettura scrittura

//  seconda scrittura tutta attaccata
document.writeln(`
${nome}${cognome}${colorePreferito}21
`);     //scrittura nomecogonmecolorepreferitonumero
console.log(`
${nome}${cognome}${colorePreferito}21, scritto correttamente, tutto attaccato!!
`);     //lettura scrittura