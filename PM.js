
// Tableau pour stocker les malades
let malades = [];

// Fonction pour ajouter un malade
function ajouterMalade(id, nom, age, maladie) {
    let malade = {
        id: id,
        nom: nom,
        age: age,
        maladie: maladie
    };
    malades.push(malade);
    console.log("Malade ajouté avec succès !");
}

// Fonction pour afficher tous les malades
function afficherMalades() {
    console.log("Liste des malades :");
    console.log(malades);
}

// Fonction pour rechercher un malade par ID
function rechercherMalade(id) {
    let malade = malades.find(m => m.id === id);
    if (malade) {
        console.log("Malade trouvé :", malade);
    } else {
        console.log("Malade non trouvé.");
    }
}

// Fonction pour modifier un malade
function modifierMalade(id, nouveauNom, nouvelAge, nouvelleMaladie) {
    let malade = malades.find(m => m.id === id);
    if (malade) {
        malade.nom = nouveauNom;
        malade.age = nouvelAge;
        malade.maladie = nouvelleMaladie;
        console.log("Informations modifiées avec succès !");
    } else {
        console.log("Malade non trouvé.");
    }
}

// Fonction pour supprimer un malade
function supprimerMalade(id) {
    malades = malades.filter(m => m.id !== id);
    console.log("Malade supprimé avec succès !");
}

// ----------------------
// Exemple d'utilisation
// ----------------------

ajouterMalade(1, "Jean", 45, "Paludisme");
ajouterMalade(2, "Marie", 30, "Typhoïde");

afficherMalades();

rechercherMalade(1);

modifierMalade(2, "Marie K.", 31, "Grippe");

supprimerMalade(1);

afficherMalades();
