/**
 * Episode 9
 * Ecrire une fonction qui prend un nombre en paramètre et affiche sa table de multiplication en console.
*/

// Récupération du nombreb 
let nombre = prompt("Entrez un nombre");
let table = `Table de multiplication de ${nombre}\n`;

// Construction de la table de multiplication
for (let i = 1; i <= 10; i++) {
   table = table + `${nombre} x ${i} = ${nombre * i}\n`;
}

/**
 * Episode 10
 * Ecrire une fonction qui prend en paramètre un nombre et retourne true si le nombre est pair ou false si le nombre est impair.
*/

/**
 * Episode 11
 * Transformer les épisodes 1, 2, 4, 6 et 7 en leur équivalent en fonction. 
NB : la fonction de l’épisode 7 prendra un tableau en paramètre.
*/