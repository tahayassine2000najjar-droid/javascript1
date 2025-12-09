const prompt = require('prompt-sync')();
conditions1
let prix = Number(prompt('entre le prix de produit: '))
let client = prompt('vous ête un etudiant,senior ou autre?: ')
if (client=== "etudiant") {
    console.log(`votre prix aprés réduction est ${prix*0.2}`);
}else if  (client=== "senior") {
    console.log(`votre prix aprés réduction est ${prix*0.3}`);
}else{
    console.log(`votre prix finale aprés remise est ${prix}`);
   }
conditions2
let bingoo = 8
let lucky_number = Number(prompt('enter a number between  and 9: '))
if (lucky_number<bingoo){
    console.log(`trop bas !`)
} else if (lucky_number>bingoo){
    console.log(`trop haut !`)
}else {
    console.log(`exact !`)
}
conditions2
let note1 = Number(prompt('entré la 1er note: '));
let note2 = Number(prompt('entré la 2eme note: '));
let note3 = Number(prompt('entré la 3eme note: '));
let somme = (note1 + note2 + note3)
let moyenne = (somme/3)
if (moyenne>=16){
    console.log(`vous avez passé avec la moyenne EXELLENT !`);
}else if(moyenne>=12){
    console.log(`vous avez passé avec la moyenne BIEN `);
}else if(moyenne>=10){
    console.log(`vous avez passé avec la moyenne PASSABLE `);
}else if (moyenne<10){
    console.log(`nchofok l3am jay `);
 }
 conditions3
 let type_salaire = prompt('déclaré CDI ou CDD ou Stage: ')
 let salaire = Number(prompt('entré votre salaire: '))
 let num1 =(salaire - (salaire*0,22));
 let num2 =(salaire - (salaire*0,18));
 let num3 =(salaire - (salaire*0,10));
  if (type_salaire==="CDI"){
    console.log(`${num1}`);
}else if (type_salaire==="CDD"){
    console.log(`${num2}`);
}else{
    console.log(`${num3}`);
}
conditions4
let pays = prompt('vous ête de la france ou usa: ')
let age = prompt('entré votre age: ')
if (pays==="france" && age>16){
    console.log(`tu es majeur`)
}else if  (pays==="france" && age<16){
 console.log(`tu es mineur`)
}
if (pays==="usa" && age>21){
    console.log(`tu es majeur`)
}else if (pays==="usa" && age<21){
//     console.log(`tu es mineur`)
}
conditions5
let pays = prompt('vous ête de la france ou autre: ')
let achat = Number(prompt('entré le montant achat:  €'))
if (achat>=50){
    console.log(`livraison gratuite`)
}else if (achat<50 && pays==="france"){
    console.log(`vous devez payer 5€ pour livraison`)
}else if (achat<50 && pays==="autre"){
    console.log(`vous devez payer 10€ pour livraison`)
}
conditions6
let numerooo = Number(prompt('entré une note entre 0-20: '))
if (numerooo === 20){
    console.log(`Parfait!`);
}else if (numerooo >= 16 && numerooo <20 ){
    console.log(`Trés bien!`);
}else if (numerooo >=12 && numerooo<16){
    console.log(`Assez bien!`);
}else if (numerooo >=10 && numerooo <12){
    console.log(`Peut mieux faire!`);
}else if (numerooo<10 && numerooo>0 ){
    console.log(`See you next year!`);
}else{
    console.log(`Note invalide`);
}
conditions7
let prenom = prompt('entré votre prenom: ')
let age = prompt('entré votre age: ')
let email = prompt('entré votre email: ')
if (prenom !=="" && age>=13 && email.includes('@')){
     console.log(`Formulaire valide`)
}else{
     console.log(`Formulaire invalide`)
} 
condition8
let age = Number(prompt('entré votre age: '))
let permis_de_conduire = prompt('avez vous un permis de conduire: ')
let vehicule = prompt('avez vous un vehicule: ')
if (14<=age && permis_de_conduire === "oui" && vehicule === "oui"){
       console.log(`vous êtes prêt à conduire `) 
}else if (14<=age && permis_de_conduire === "oui" && vehicule === "non"){
       console.log(`vous manquez vehicule `)
}else if (14<=age && permis_de_conduire === "non" && vehicule === "non"){
       console.log(`vous manquez vehicule et permis_de_conduire `)
}else if (14>=age && permis_de_conduire === "oui" && vehicule === "non"){
       console.log(`vous manquez vehicule et age`)
}else if (14<=age && permis_de_conduire === "non" && vehicule === "oui"){
       console.log(`vous manquez permis_de_conduire `)
}else if (14<=age && permis_de_conduire === "non" && vehicule === "non"){
       console.log(`vous manquez vehicule et permis_de_conduire`)    
}else if (14>=age && permis_de_conduire === "non" && vehicule === "oui"){
       console.log(`vous manquez permis_de_conduire et age`)
}else if (14>=age && permis_de_conduire === "oui" && vehicule === "oui"){
       console.log(`vous manquez age`)
}else if (14>=age && permis_de_conduire === "non" && vehicule === "oui"){
       console.log(`vous manquez age et permis_de_conduire`)
}else if (14>=age && permis_de_conduire === "oui" && vehicule === "non"){
       console.log(`vous manquez age et vehicule`)
}else{
    console.log(`vous devez avoir legale age ; permis_de_conduire; vehicule `)
}
conditions9
let nombre1 = Number(prompt('entré le premier  nombre: '))
let nombre2 = Number(prompt('entré le deuxieme  nombre: '))
let nombre3 = Number(prompt('entré le troisieme  nombre: '))
let classement = [nombre1,nombre2,nombre3]
classement = classement.sort((a ,b) => a-b)
if (nombre1 !== nombre2 && nombre1 !== nombre3 && nombre2 !== nombre3 ){
    console.log(`${classement}`)
}else{
    console.log(`Les nombres doivent être uniques`);
}
challenge10
let password = prompt('entré votre password: ')
let code = 12345678
if  (password ==code){
    console.log(`bienvenue`);
 }else if (password !==code ){
    console.log(`vous avez 2 autres tentatives!`);
 } 
 password = prompt('entré votre password: ')
 if (password ==code ){
    console.log(`vous avez réussi au 2 éme tentative : bienvenue`);
 }else if (password !==code ){
    console.log(`il vous laisse  une seule autres tentative!`);
 }
 password = prompt('entré votre password: ')
 if (password ==code ){
    console.log(`vous avez réussi au 3 éme tentative : bienvenue`);
 }else {
    console.log(`Accés bloqué!`);
 }

    
