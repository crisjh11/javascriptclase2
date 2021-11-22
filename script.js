let edad = parseInt(prompt("Ingrese su edad"));


if  (edad > 0 && edad < 18)  {
    alert ("Ya puede anotarse para recibir su dosis de Pfizer o Moderna");
} else if (edad >= 18 && edad < 50 ) {
    alert ("Ya puede anotarse para recibir su dosis de Astrazeneca o Sinopharm");
} else if (edad >= 50) {
    alert ("Ya puede anotarse para recibir su dosis de SputnikV");
} else {
    alert ("No ha ingresado una edad válida");
}













    
