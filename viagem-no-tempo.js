/* Condições:
	dois créditos são iguais ou um crédito é igual à soma dos outros dois. */

const line = gets().split("")
const a = line[0];
const b = line[1];
const c = line[2];


if((a + b === c) || (a + c === b) || (b + c === a)) {
    console.log("S");
    

} else if ((a === b) || (b === c) || (c === a) || (c === b)) {
    console.log("S");
    
} else {
    console.log("N");  
    
} 