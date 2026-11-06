// Exercice 10b : explorer et refactoriser les traitements avant l'interface.
let equipements = [
    { id: 1, nom: 'Portable Lenovo', prix: 1000, disponible: true },
    { id: 2, nom: 'Écran Dell', prix: 200, disponible: false },
    { id: 3, nom: 'Clavier Logitech', prix: 50, disponible: true },
    { id: 4, nom: 'Souris Logitech', prix: 30, disponible: true },
    { id: 5, nom: 'Imprimante HP', prix: 300, disponible: false },
];

// 1. Garder uniquement les équipements disponibles.
function selectionnerDisponibles(liste) {
    const resultat = [];
    for (const equipement of liste) {
        if (equipement.disponible) {
            resultat.push(equipement);
        }
    }
    return resultat;
}

// Garder uniquement les équipements empruntés.
function selectionnerEmpruntes(liste) {
    const resultat = [];
    for (const equipement of liste) {
        if (!equipement.disponible) {
            resultat.push(equipement);
        }
    }
    return resultat;
}

// Garder les équipements dont le prix est inférieur à 100 CHF.
function selectionnerMoinsDe100(liste) {
    const resultat = [];
    for (const equipement of liste) {
        if (equipement.prix < 100) {
            resultat.push(equipement);
        }
    }
    return resultat;
}
// 2. Récupérer les noms des équipements.
function extraireNoms(liste) {
    const noms = [];
    for (const equipement of liste) {
        noms.push(equipement.nom);
    }
    return noms;
}

// 3. Additionner les prix des équipements.
function calculerTotal(liste) {
    let total = 0;
    for (const equipement of liste) {
        total += equipement.prix;
    }
    return total;
}

// 4. Inverser la disponibilité (cette version modifie l'objet reçu).
function changerDisponibilite(liste, id) {
    for (const equipement of liste) {
        if (equipement.id === id) {
            equipement.disponible = !equipement.disponible;
        }
    }
    return liste;
}

// Interface fournie : rien à modifier dans cette partie.
function afficher() {
    const disponibles = selectionnerDisponibles(equipements);
    const filtre = document.getElementById('idFiltre').value;
    let liste = equipements;
    if (filtre === 'disponibles') liste = disponibles;
    if (filtre === 'empruntes') liste = selectionnerEmpruntes(equipements);
    if (filtre === 'moinsDe100') liste = selectionnerMoinsDe100(equipements);
    document.getElementById('idNoms').textContent = extraireNoms(disponibles).join(', ') || 'Aucun';
    document.getElementById('idTotal').textContent = calculerTotal(disponibles) + ' CHF';
    document.getElementById('idNombre').textContent = disponibles.length + ' / ' + equipements.length;
    const corps = document.getElementById('idEquipements');
    corps.replaceChildren();
    for (const equipement of liste) {
        const ligne = corps.insertRow();
        ligne.insertCell().textContent = equipement.nom;
        ligne.insertCell().textContent = equipement.prix + ' CHF';
        ligne.insertCell().textContent = equipement.disponible ? 'Disponible' : 'Emprunté';
        const bouton = document.createElement('button');
        bouton.textContent = equipement.disponible ? 'Emprunter' : 'Restituer';
        bouton.setAttribute('aria-label', bouton.textContent + ' : ' + equipement.nom);
        bouton.addEventListener('click', () => {
            equipements = changerDisponibilite(equipements, equipement.id);
            afficher();
        });
        ligne.insertCell().appendChild(bouton);
    }
    if (liste.length === 0) {
        const cellule = corps.insertRow().insertCell();
        cellule.colSpan = 4;
        cellule.textContent = 'Aucun équipement ne correspond au filtre.';
    }
}

document.getElementById('idFiltre').addEventListener('change', afficher);
afficher();
