 const prompt = require('prompt-sync')();
challenge1
let nombre = Number(prompt('entré un nombre: '))
if (nombre%2 ===0){
    console.log(`nombre pair`)
}else{
    console.log(`nombre impair`)
}
challenge2
let numero = Number(prompt('entré un numero: '))
if (numero === 0 ){
    console.log(`ce numero est nul`)
}else if (numero >0){
    console.log(`ce numero est positif`)
}else if (numero <0){
    console.log(`ce numero est negatif`)
}
challenge3
let age = Number(prompt('votre age est: '))
if (age >= 18){
    console.log(`tu es éligible au vote: `)
}else{
    console.log(`pas  éligible au vote: `)
}
challenge4
let a = Number(prompt('entré le premier numero: '))
let b = Number(prompt('entré le 2eme numero: '))
if (a>b){
    console.log(`${a}`)
}else {
     console.log(`${b}`)
}
challenge5
let note = Number(prompt('entré la note: '))
if (100>=note && note>=90){
    console.log(`A`)
} else if (90>note && note>=80){
    console.log(`B`)
}else if (80>note && note>=70){
    console.log(`C`)
}else if (70>note && note>=60){
    console.log(`D`)
}else{
    console.log(`F`)
}
challenge6
let année = Number(prompt('entré votre année: '))
if ( année%4==0 && année%400==0){
    console.log(`année bissextile`)
}else{
    console.log(`année classique`)
}
challenge7
let number = prompt('entré un numero: ')
let specialregex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
let digit = /\d/.test(number)
if (number.length<6){
    console.log(`faible`)
} else if (number.length>=6 && number.length<8 && digit){
    console.log(`moyen`)
}else{
    console.log(`fort`)
}
// challenge8
 let input= prompt('entré la coleur de circulation: ')
 switch (input){
 case "rouge" :
    console.log(`Arrêt!`);
    break;
 case "jaune" :
    console.log(`Préparez-vous!`);
     break;
 case "vert":
    console.log(`Allez!`);
 }
challenge9
let quiz = Number(prompt('entré un nombre: '))
switch (true){
     case (quiz%5==0 && quiz%3==0) :
     console.log(`fizzbuzz`);
    break;
    case (quiz%3==0) :
     console.log(`fizz`);
    break;
    case (quiz%5==0) :
     console.log(`buzz`);
     break;
   default :
     console.log(`quiz`);
   }
challenge10
let compte = prompt(' entré votre numero compte: ')
let mot_de_pass = prompt('entré mot de passe: ')
switch (true){
        case (compte=="admin" && mot_de_pass=="1234"):
    console.log(`bienvenue `);      
    break;
        case (compte=="admin" && mot_de_pass !=="1234"):
    console.log(`mot de pass incorrecte `);
    break;
     case (compte!=="admin" && mot_de_pass=="1234"):
    console.log(`nom du compte incorrecte `);      
    break;
    default :
    console.log(`nom du compte et  mot de pass sont incorrectes `);
}