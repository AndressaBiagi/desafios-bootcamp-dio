let x = gets(); 
let y = gets(); 
let z = gets();


if (x === "vertebrado") {
    if (y === "ave") {
        if (z === "carnivoro") {
            console.log("aguia\n");
        }
        if (z === "onivoro") {
            console.log("pomba\n");
        }
    }
    if (y === "mamifero") {
        if (z === "carnivoro") {
            console.log("homem\n");
        }
        if (z === "onivoro") {
            console.log("vaca\n");
        }
    } 
}

if (x === "invertebrado") {
    if (y === "inseto") {
        if (z === "hematofago") {
            console.log("pulga\n");
        }
        if (z === "herbivoro") {
            console.log("lagarta\n");
        }
    }
    if (y === "anelideo") {
        if (z === "hematofago") {
            console.log("sanguessuga\n");
        }
        if (z === "onivoro") {
            console.log("minhoca\n");
        }
    } 
}