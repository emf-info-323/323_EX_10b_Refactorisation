// Version de départ : fonctionnelle, mais volontairement impérative et mutable.
// Votre travail consiste à refactoriser ce code en conservant son comportement.
let categories = ['Ordinateur portable', 'Ordinateur fixe', 'Écran', 'Imprimante', 'Serveur'];
let etats = ['Neuf', 'Bon', 'À réparer', 'Hors service'];
let equipements = [
    { id: 1, designation: 'Portable enseignants', categorie: 'Ordinateur portable', marque: 'Lenovo', modele: 'ThinkPad T14', prix: 1400, dateAcquisition: '2025-08-15', etat: 'Bon', disponible: true, emplacement: 'Stock' },
    { id: 2, designation: 'Portable direction', categorie: 'Ordinateur portable', marque: 'HP', modele: 'EliteBook 840', prix: 1600, dateAcquisition: '2026-02-10', etat: 'Neuf', disponible: false, emplacement: 'Direction' },
    { id: 3, designation: 'Portable de prêt', categorie: 'Ordinateur portable', marque: 'Dell', modele: 'Latitude 5440', prix: 1200, dateAcquisition: '2024-09-02', etat: 'À réparer', disponible: true, emplacement: 'Atelier' },
    { id: 4, designation: 'Portable multimédia', categorie: 'Ordinateur portable', marque: 'Apple', modele: 'MacBook Air', prix: 1500, dateAcquisition: '2025-06-12', etat: 'Bon', disponible: false, emplacement: 'Salle 203' },
    { id: 5, designation: 'Portable réserve', categorie: 'Ordinateur portable', marque: 'Lenovo', modele: 'ThinkPad E14', prix: 1000, dateAcquisition: '2026-07-01', etat: 'Neuf', disponible: true, emplacement: 'Stock' },
    { id: 6, designation: 'Portable ancien', categorie: 'Ordinateur portable', marque: 'HP', modele: 'ProBook 450', prix: 900, dateAcquisition: '2020-03-10', etat: 'Hors service', disponible: false, emplacement: 'Atelier' },
    { id: 7, designation: 'Poste développement 01', categorie: 'Ordinateur fixe', marque: 'Dell', modele: 'OptiPlex 7010', prix: 1100, dateAcquisition: '2025-08-20', etat: 'Bon', disponible: false, emplacement: 'Salle 101' },
    { id: 8, designation: 'Poste développement 02', categorie: 'Ordinateur fixe', marque: 'Dell', modele: 'OptiPlex 7010', prix: 1100, dateAcquisition: '2025-08-20', etat: 'Bon', disponible: false, emplacement: 'Salle 101' },
    { id: 9, designation: 'Poste de réserve', categorie: 'Ordinateur fixe', marque: 'HP', modele: 'ProDesk 400', prix: 800, dateAcquisition: '2024-01-15', etat: 'Bon', disponible: true, emplacement: 'Stock' },
    { id: 10, designation: 'Station graphique', categorie: 'Ordinateur fixe', marque: 'Lenovo', modele: 'ThinkStation P3', prix: 2200, dateAcquisition: '2026-04-12', etat: 'Neuf', disponible: false, emplacement: 'Salle 203' },
    { id: 11, designation: 'Poste atelier', categorie: 'Ordinateur fixe', marque: 'HP', modele: 'ProDesk 600', prix: 950, dateAcquisition: '2022-11-04', etat: 'À réparer', disponible: false, emplacement: 'Atelier' },
    { id: 12, designation: 'Poste ancien', categorie: 'Ordinateur fixe', marque: 'Dell', modele: 'OptiPlex 3050', prix: 700, dateAcquisition: '2019-08-15', etat: 'Hors service', disponible: false, emplacement: 'Stock' },
    { id: 13, designation: 'Écran développement 01', categorie: 'Écran', marque: 'Dell', modele: 'P2422H', prix: 250, dateAcquisition: '2025-08-20', etat: 'Bon', disponible: false, emplacement: 'Salle 101' },
    { id: 14, designation: 'Écran développement 02', categorie: 'Écran', marque: 'Dell', modele: 'P2422H', prix: 250, dateAcquisition: '2025-08-20', etat: 'Bon', disponible: false, emplacement: 'Salle 101' },
    { id: 15, designation: 'Écran de réserve', categorie: 'Écran', marque: 'Samsung', modele: 'S24R', prix: 200, dateAcquisition: '2024-05-03', etat: 'Bon', disponible: true, emplacement: 'Stock' },
    { id: 16, designation: 'Écran graphique', categorie: 'Écran', marque: 'LG', modele: 'UltraFine', prix: 600, dateAcquisition: '2026-04-12', etat: 'Neuf', disponible: false, emplacement: 'Salle 203' },
    { id: 17, designation: 'Écran accueil', categorie: 'Écran', marque: 'Samsung', modele: 'S27', prix: 300, dateAcquisition: '2023-02-09', etat: 'À réparer', disponible: false, emplacement: 'Atelier' },
    { id: 18, designation: 'Écran neuf', categorie: 'Écran', marque: 'HP', modele: 'E24', prix: 300, dateAcquisition: '2026-08-01', etat: 'Neuf', disponible: true, emplacement: 'Stock' },
    { id: 19, designation: 'Imprimante secrétariat', categorie: 'Imprimante', marque: 'HP', modele: 'LaserJet Pro', prix: 450, dateAcquisition: '2024-03-01', etat: 'Bon', disponible: false, emplacement: 'Secrétariat' },
    { id: 20, designation: 'Imprimante de réserve', categorie: 'Imprimante', marque: 'Brother', modele: 'HL-L5100', prix: 350, dateAcquisition: '2025-06-05', etat: 'Bon', disponible: true, emplacement: 'Stock' },
    { id: 21, designation: 'Imprimante atelier', categorie: 'Imprimante', marque: 'Brother', modele: 'MFC-L2750', prix: 400, dateAcquisition: '2022-02-14', etat: 'À réparer', disponible: false, emplacement: 'Atelier' },
    { id: 22, designation: 'Serveur pédagogique', categorie: 'Serveur', marque: 'Dell', modele: 'PowerEdge T350', prix: 3500, dateAcquisition: '2025-01-10', etat: 'Bon', disponible: false, emplacement: 'Local technique' },
    { id: 23, designation: 'Serveur de réserve', categorie: 'Serveur', marque: 'HP', modele: 'ProLiant ML30', prix: 2800, dateAcquisition: '2024-06-18', etat: 'Bon', disponible: true, emplacement: 'Stock' },
    { id: 24, designation: 'Serveur ancien', categorie: 'Serveur', marque: 'Dell', modele: 'PowerEdge T130', prix: 2000, dateAcquisition: '2018-09-01', etat: 'Hors service', disponible: false, emplacement: 'Local technique' },
];

window.addEventListener('load', () => {
    for (let i = 0; i < categories.length; i++) {
        document.getElementById('idCategorie').add(new Option(categories[i], categories[i]));
    }
    for (let i = 0; i < etats.length; i++) {
        document.getElementById('idEtat').add(new Option(etats[i], etats[i]));
    }
    document.getElementById('idCategorie').addEventListener('change', actualiser);
    document.getElementById('idEtat').addEventListener('change', actualiser);
    document.getElementById('idRecherche').addEventListener('input', actualiser);
    document.getElementById('idReinitialiser').addEventListener('click', () => {
        document.getElementById('idCategorie').value = '';
        document.getElementById('idEtat').value = '';
        document.getElementById('idRecherche').value = '';
        actualiser();
    });
    actualiser();
});

function rechercherEquipements() {
    let categorie = document.getElementById('idCategorie').value;
    let etat = document.getElementById('idEtat').value;
    let recherche = document.getElementById('idRecherche').value.trim().toLowerCase();
    let resultat = [];
    for (let i = 0; i < equipements.length; i++) {
        let equipement = equipements[i];
        if (categorie === '' || equipement.categorie === categorie) {
            if (etat === '' || equipement.etat === etat) {
                if (equipement.designation.toLowerCase().includes(recherche) || equipement.marque.toLowerCase().includes(recherche)) {
                    resultat.push(equipement);
                }
            }
        }
    }
    return resultat;
}

function afficherEquipements(liste) {
    let corps = document.getElementById('idEquipements');
    corps.replaceChildren();
    document.getElementById('idResultats').textContent = liste.length + ' équipement(s) affiché(s) sur ' + equipements.length;
    for (let i = 0; i < liste.length; i++) {
        let equipement = liste[i];
        let ligne = corps.insertRow();
        ligne.insertCell().textContent = equipement.id;
        let designation = ligne.insertCell();
        designation.textContent = equipement.designation;
        let modele = document.createElement('small');
        modele.textContent = equipement.marque + ' · ' + equipement.modele;
        designation.appendChild(modele);
        ligne.insertCell().textContent = equipement.categorie;
        ligne.insertCell().textContent = equipement.prix.toLocaleString('fr-CH', { style: 'currency', currency: 'CHF' });
        ligne.insertCell().textContent = equipement.dateAcquisition.split('-').reverse().join('.');
        ligne.insertCell().textContent = equipement.emplacement;
        let choixEtat = document.createElement('select');
        choixEtat.setAttribute('aria-label', 'État de ' + equipement.designation);
        for (let j = 0; j < etats.length; j++) {
            choixEtat.add(new Option(etats[j], etats[j]));
        }
        choixEtat.value = equipement.etat;
        choixEtat.addEventListener('change', () => modifierEtat(equipement.id, choixEtat.value));
        ligne.insertCell().appendChild(choixEtat);
        let choixDisponibilite = document.createElement('select');
        choixDisponibilite.setAttribute('aria-label', 'Disponibilité de ' + equipement.designation);
        choixDisponibilite.add(new Option('Disponible', 'true'));
        choixDisponibilite.add(new Option('Attribué', 'false'));
        choixDisponibilite.value = String(equipement.disponible);
        choixDisponibilite.addEventListener('change', () => modifierDisponibilite(equipement.id, choixDisponibilite.value === 'true'));
        ligne.insertCell().appendChild(choixDisponibilite);
    }
    if (liste.length === 0) {
        let cellule = corps.insertRow().insertCell();
        cellule.colSpan = 8;
        cellule.textContent = 'Aucun équipement ne correspond aux critères.';
    }
}

function afficherStatistiques() {
    let total = 0;
    let disponible = 0;
    let reparations = [];
    for (let i = 0; i < equipements.length; i++) {
        total += equipements[i].prix;
        if (equipements[i].disponible === true) {
            disponible += equipements[i].prix;
        }
        if (equipements[i].etat === 'À réparer') {
            reparations.push(equipements[i].designation);
        }
    }
    document.getElementById('idNombre').textContent = equipements.length;
    document.getElementById('idValeur').textContent = total.toLocaleString('fr-CH', { style: 'currency', currency: 'CHF' });
    document.getElementById('idDisponible').textContent = disponible.toLocaleString('fr-CH', { style: 'currency', currency: 'CHF' });
    document.getElementById('idReparations').textContent = reparations.length;
    document.getElementById('idListeReparations').textContent = reparations.length === 0 ? 'Aucun équipement à réparer.' : reparations.join(' · ');
    let repartition = document.getElementById('idCategories');
    repartition.replaceChildren();
    for (let i = 0; i < categories.length; i++) {
        let nombre = 0;
        for (let j = 0; j < equipements.length; j++) {
            if (equipements[j].categorie === categories[i]) {
                nombre += 1;
            }
        }
        let element = document.createElement('li');
        element.textContent = categories[i] + ' : ' + nombre;
        repartition.appendChild(element);
    }
    afficherValeurPortablesDisponibles();
}

function afficherValeurPortablesDisponibles() {
    let disponibles = [];
    for (let i = 0; i < equipements.length; i++) {
        if (equipements[i].disponible === true) {
            disponibles.push(equipements[i]);
        }
    }
    let portables = [];
    for (let i = 0; i < disponibles.length; i++) {
        if (disponibles[i].categorie === 'Ordinateur portable') {
            portables.push(disponibles[i]);
        }
    }
    let prix = [];
    for (let i = 0; i < portables.length; i++) {
        prix.push(portables[i].prix);
    }
    let total = 0;
    for (let i = 0; i < prix.length; i++) {
        total += prix[i];
    }
    document.getElementById('idPortables').textContent = total.toLocaleString('fr-CH', { style: 'currency', currency: 'CHF' });
}

function modifierEtat(id, nouvelEtat) {
    for (let i = 0; i < equipements.length; i++) {
        if (equipements[i].id === id) {
            equipements[i].etat = nouvelEtat;
        }
    }
    actualiser();
}

function modifierDisponibilite(id, disponible) {
    for (let i = 0; i < equipements.length; i++) {
        if (equipements[i].id === id) {
            equipements[i].disponible = disponible;
        }
    }
    actualiser();
}

function actualiser() {
    let resultat = rechercherEquipements();
    afficherEquipements(resultat);
    afficherStatistiques();
}
