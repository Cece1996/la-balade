/**
 * Episode 1
 * Ecrire un programme qui demande à l’utilisateur son adresse e-mail et renvoie un message en cas d’erreur si l’adresse e-mail n’est pas correctement saisie.
*/
let mail = prompt("Entrez votre adresse mail : exemple@gmail.com")

if (/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,6}$/.test(mail)) {
    alert("Adresse e-mail valide")
} else {
    alert("Veillez entrer un adresse e-mail valide!")
}


/**
 *Episode 2
 *  Ecrire un programme qui demande à l'utilisateur de renseigner un mot de passe et vérifie si ce mot de passe obéit aux critères suivants
 */

let keyword = prompt('Choisissez un mot de passe')
//mettre une condition -au moins 8 caracteres; une majuscule et un chiffre *qjouter un while
while (keyword.length < 8) {
    if (keyword.length < 8) {
        alert('votre mot de passe doit contenir au moins 8 caracteres')
        prompt('Choisissez un mot de valide')
    } else{
        break;
    }
    
}


/**
 * Episode 3
 * Ecrire un programme qui demande à l'utilisateur son nom et le nombre d’enfants qu’il a et affiche un résumé.
*/

let name = prompt('Quel est votre nom?')
let child = prompt('Combien d\'enfants avez-vous?')

if ( parsInt(child) == 0) {
    alert(name + 'Vous n\'avez pas d\'enfants')   
} else {
    
}
alert(name + 'Vous avez' + child + 'enfants')

/**
 * Episode 4
 * Ecrire un programme demande la date de naissance d’un utilisateur et vérifie si la date saisie est au format JJ/MM/AAAA.
*/

let birth = prompt('Quel est votre date de naissance?') 
//au format jj/mm/aaaa

/**
 * Episode 5
 * Ecrire un programme qui :
demande à l'utilisateur de saisir son nom, prénom ainsi que son sexe ;
stocke ces informations dans un objet;
ajoute une clé titre à cet objet ayant comme valeur M ou Mme en fonction du sexe de l’utilisateur;
Affiche l’objet en console.
*/

/**
 * Episode 6
 * Ecrire un programme qui demande à l’utilisateur de saisir le numéro d’un jour et renvoie le jour correspondant. 
*/

/**
 *Episode 7
 * Ecrire un programme qui demande à l’utilisateur de saisir toutes ses notes en Mathématiques et affiche sa moyenne.
*/

/**
 * Episode 8
 * Ecrire un programme qui demande de saisir les noms et les moyennes des élèves d’une classe et affiche le premier de la classe (son nom ainsi que sa moyenne).
*/