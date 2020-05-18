/**
 * Episode 1
 * Ecrire un programme qui demande à l’utilisateur son adresse e-mail et renvoie un message en cas d’erreur si l’adresse e-mail n’est pas correctement saisie.
*/

//Recuperation de l'adresse e-mail
let mail = prompt("Entrez votre adresse mail : exemple@gmail.com");

//Condition de validation de l'adresse e-mail
 if (/^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,6}$/.test(mail)) {
    alert("Adresse e-mail valide");
} else {
        alert("Veillez entrer une adresse e-mail valide!");
       prompt("Entrez une adresse e-mail à nouveau");
}


/**
 *Episode 2
 *  Ecrire un programme qui demande à l'utilisateur de renseigner un mot de passe et vérifie si ce mot de passe obéit aux critères suivants
 */

 //Recuperation du mot de passe
let keyword = prompt('Choisissez un mot de passe');

//Condition de validation du mot de passe
if(/^[A-Za-z0-9]\w{7,14}$/.test(keyword)) { 
    alert('Mot de passe valide');
}else{
    alert('Votre mot de passe doit contenir au moins 8 caracteres,une majuscule et une nombre');
    prompt('Choisissez un mot de valide');
} 
            
         
/**
 * Episode 3
 * Ecrire un programme qui demande à l'utilisateur son nom et le nombre d’enfants qu’il a et affiche un résumé.
*/

//Recuperation des informations
let name = prompt('Quel est votre nom?');
let child = prompt('Combien d\'enfants avez-vous?');

//Affichage du message
if ( parseInt(child) == 0) {
    alert(`${name} Vous n\'avez pas d'enfants`);
} else if (parseInt(child) == 1) {
    alert(`${name} Vous avez ${child} enfant`);
} else if (parseInt(child) > 1) {
    alert(`${name} vous avez ${child} enfants`);
}

/**
 * Episode 4
 * Ecrire un programme demande la date de naissance d’un utilisateur et vérifie si la date saisie est au format JJ/MM/AAAA.
*/

//Recuperation de la date de naissance
let birth = prompt('Entrez votre date de naissance au format jj/mm/aaaa');

//Condition de validation de la date de naissance
if (/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(birth)) {
    alert('Donnee enregistree');
} else {
    alert('Veillez entrer une date au bon format');
    prompt('Entrez votre date de naissance au format jj/mm/aaaa');
}


/**
 * Episode 5
 * Ecrire un programme qui :
demande à l'utilisateur de saisir son nom, prénom ainsi que son sexe ;
stocke ces informations dans un objet;
ajoute une clé titre à cet objet ayant comme valeur M ou Mme en fonction du sexe de l’utilisateur;
Affiche l’objet en console.
*/

 
let nom = prompt('Quel est votre nom?');
let prenom = prompt('Quel est votre prénom?');
let sexe = prompt('Quel est votre sexe? Homme ou Femme');
class Genre{
    constructor(newName, newSurname, newSex){
        this.name = newName;
        this.surname = newSurname;
        this.sex = newSex;
    }
}

if (sexe == 'Homme') {
    let M = new Genre (nom, prenom, sexe);
    console.log(M);
} if (sexe == 'Femme') {
    let Mme = (nom, prenom, sex);
    console.log(Mme);
} else {
    alert('Veillez entrer les bonnes informations')
} 


/**
 * Episode 6
 * Ecrire un programme qui demande à l’utilisateur de saisir le numéro d’un jour et renvoie le jour correspondant. 
*/

let day = prompt('Saisissez le numéro d\'un jour de la semaine')
if (day == '1'){
    alert('Lundi')
} else if (day == '2') {
    alert('Mardi')
 } else if (day == '3') {
    alert('Mercredi')
 } else if (day == '4') {
    alert('Jeudi')
 } else if (day == '5') {
    alert('Vendredi')
 } else if (day == '6') {
    alert('Samedi')
 } else if (day == '7') {
    alert('Dimanche')
 } else {
    alert('Je n\'ai rien a vous dire')
 }


/**
 *Episode 7
 * Ecrire un programme qui demande à l’utilisateur de saisir toutes ses notes en Mathématiques et affiche sa moyenne.
*/

let note1 = prompt('Veillez saisir votre premiere note obtenue en Mathematiques')
let note2 = prompt('Veillez saisir votre seconde note')
let note3 = prompt('Veillez saisir votre troisieme note')
let note4 = prompt('Veillez saisir votre quatrieme note')
let moyenne = (parseInt(note1) + parseInt(note2) + parseInt(note3) + parseInt(note4))/4
alert(`Votre moyenne en Mathematique est ${moyenne}`)

/**
 * Episode 8
 * Ecrire un programme qui demande de saisir les noms et les moyennes des élèves d’une classe et affiche le premier de la classe (son nom ainsi que sa moyenne).
*/

let nomEleve = prompt('Veillez saisir le nom de l\'élève');
let moyenneEleve = prompt('Entrez la moyenne de l\'élève');
