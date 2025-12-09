 const prompt = require('prompt-sync')({sigint: true });
// //challenge1
let prenom = prompt("entré votre prenom?: ");
console.log(`bonjour, votre prenom ${prenom}`);
let age = prompt("entré votre age?: ");
console.log(`votre age ${age}`);
let sexe = prompt("entré votre sexe?: ");
console.log(`votre sexe est ${sexe}`);
let numero_de_telephone =prompt("entré votre numero_de_telephone?: ");
console.log(`votre numero_de_telephone ${numero_de_telephone}`);
//challenge2
let celsius = Number(prompt('enter your celsius: '));
let fahrenheit = ((celsius*1.8)+32);
console.log(`la temperature en fahrenheit est: ${fahrenheit}`);
//challenge3
let A = 10
let B = 20
let C = 5
temporaire = A
A=B
B=C
C=temporaire
console.log(`${A} ,${B} ,${C}`)
//challenge4
let a = Number(prompt('donner le premier  numero: '))
let b = Number(prompt('donner le deuxième  numero: '))
addition = a+b
soustraction = a-b
division = a/b
reste = a%b
console.log(`${addition} ,${soustraction} ,${division} ,${reste}`)
//challenge5
let numero1 = Number(prompt('ecrire le premier nombre: ')) 
let numero2 = Number(prompt('ecrire le deuxième nombre: '));
let numero3 = Number(prompt('ecrire le troisième nombre: '));
let numero4 = Number(prompt('ecrire le quatrième numero nombre: '));
somme = numero1+numero2+numero3+numero4
moyenne = (somme/4)
console.log(`${somme}`)
console.log(`${moyenne}`);
//challenge6
let vitesse = Number(prompt('enté la vitesse: '))
let temps = Number(prompt('entré le temps: '))
distance =vitesse*temps
console.log(`${distance}`)
//challenge7
let r = Number(prompt('entré le rayon: '))
circonférence= 2*Math.PI*r
console.log(`${circonférence}`)
challenge8
let nombre = prompt('entré un nombre à 3 chiffres: ')
nombre = nombre.split("")
nombre = nombre.reverse()
nombre = nombre.join("")
console.log(`${nombre}`)
challenge9
let km = Number(prompt('entré la distance en km: '));
let mile = km/1.609
  console.log(`your distance in mile is ${mile}`);
//challenge10
let EURO = Number(prompt('entré le montant en euro: '))
let MAD = EURO*10.61
  console.log(`votre montant est ${MAD} dhs`);










