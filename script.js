
function consoleLogMessage() {

  console.log('Hello From JS!');
}

consoleLogMessage();


/*Bish-Bosh
Bish-Bosh listar alla tal mellan 1 och 100, men vissa undantag: Om talet är jämnt delbart
med 3 listas ‘Bish’ istället för talet. Om talet är jämnt delbart med 4 listas ‘Bosh’ istället för
talet. Om talet är jämnt delbart med både med 3 och 4 skrivs “Bish-Bosh” istället för talet.
Exempel:
1, 2, Bish, Bosh, 5, Bish, 7, Bosh, Bish, 10, 11, Bish-Bosh, 13, 14, Bish [...*/

//X
const modulo3 = 3;
//Y
const modulo4 = 4;
//N
const endCount = 100;


console.log('**************************');
console.log('*******Bish-Bosh *********');
console.log('**************************');
const isModulo = function moduloFunction() {

  for (let i = 1; i <= endCount; i++) {
    if ((i % modulo3 === 0) && (i % modulo4 === 0))
    console.log('Bish-Bosh');
    else if (i % modulo3 === 0)
    console.log('Bish');
    else if (i % modulo4 === 0)
    console.log('Bosh');
    else
   console.log(i);
  }

}

let bisBosh = isModulo();
console.log('**************************');
console.log('**************************');

