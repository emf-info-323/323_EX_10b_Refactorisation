<h1><code>Module 323</code> - Programmer de manière fonctionnelle</h1>

# 😅 Exercice 10b - Refactorisation d’une application de gestion de stock informatique

## 🎯 Objectifs

- Lire et analyser une application existante, fonctionnelle mais difficile à maintenir.
- Remplacer les traitements impératifs adaptés par `map()`, `filter()` et `reduce()`.
- Introduire l’immuabilité et séparer les fonctions pures des effets de bord.
- Simplifier le code sans changer les fonctionnalités ni les résultats.

---

## 🧩 Consigne

Une école professionnelle utilise une application pour consulter son parc informatique. Le programme fonctionne, mais son code présente plusieurs défauts de conception. Votre mission est de **refactoriser uniquement `src/ex10.js`**, par petites étapes, en conservant le comportement de l’application.

> La refactorisation consiste à modifier le code source d’un programme sans changer son comportement externe, afin d’en améliorer la structure, la lisibilité et la maintenabilité.

Le HTML, le CSS et les données sont fournis. Vous ne devez pas reconstruire l’application, ajouter de fonctionnalités ou modifier les données de départ pour faire passer vos vérifications.

### Démarrage et structure

Dans Visual Studio Code, ouvrez `src/ex10b.html` avec **Live Server**. Les filtres et les modifications fonctionnent immédiatement : il n’y a pas de code à compléter avant de commencer.

Conservez ces fichiers et cette organisation. Utilisez uniquement JavaScript ES6+, sans framework, bibliothèque, backend ou outil de compilation. Gardez des noms explicites en français. Aucune solution corrigée n’est fournie dans cette version destinée aux apprentis.

### Comportement à conserver

- Afficher les 24 équipements dans leur ordre initial, avec leurs caractéristiques.
- Combiner les filtres de catégorie, d’état et de recherche avec un **ET**.
- Rechercher dans la désignation **ou** la marque, sans distinguer majuscules et minuscules, en ignorant les espaces au début et à la fin. Les accents restent significatifs ; le modèle n’est pas recherché.
- Afficher un message si aucun équipement ne correspond. Le bouton « Effacer les filtres » rétablit la liste complète sans annuler les modifications.
- Calculer les statistiques sur **tout le parc**, indépendamment des filtres : valeur totale, valeur disponible, valeur des portables disponibles, répartition par catégorie et liste des équipements à réparer.
- La disponibilité est indépendante de l’état : un équipement à réparer ou hors service peut être marqué disponible. Son prix est alors inclus dans la valeur disponible. Les prix sont les prix d’acquisition, sans amortissement.
- Modifier l’état ou la disponibilité et actualiser immédiatement la liste et les statistiques. Une ligne peut disparaître si elle ne correspond plus au filtre actif.
- Conserver les modifications en mémoire uniquement. Recharger la page restaure les données initiales.

## 🛠️ Missions

Les missions 1 à 5 et la validation sont obligatoires. Testez après chaque petite transformation ; n’attendez pas la fin.

| Étape | Travail attendu |
| --- | --- |
| 1. Analyser | Tester l’application et relever au moins cinq défauts dans le JavaScript. |
| 2. Transformer les tableaux | Refactoriser la sélection, l’extraction des désignations à réparer et les totaux. |
| 3. Introduire l’immuabilité | Refactoriser les deux modifications d’équipement. |
| 4. Isoler les fonctions pures | Séparer les traitements métier du DOM et des variables globales. |
| 5. Simplifier et factoriser | Réduire les répétitions et les responsabilités mélangées. |
| Valider et expliquer | Rejouer les scénarios et expliquer deux améliorations. |

### Mission 1 — Identifier les problèmes

Pour chaque défaut relevé, notez la fonction concernée, un extrait et son impact sur la maintenance. Recherchez les variables modifiables, les mutations, les dépendances globales, les boucles, les conditions imbriquées et les effets de bord. Distinguez les effets de bord nécessaires à l’interface de ceux que vous pouvez retirer des calculs.

### Mission 2 — Refactoriser les traitements de tableaux

Commencez par `rechercherEquipements()` et `afficherStatistiques()`.

- Sélectionnez les équipements avec `filter()`.
- Extrayez les désignations des équipements à réparer avec `map()`.
- Calculez les valeurs et les effectifs par catégorie avec `reduce()`.
- Prévoyez une valeur initiale pour les réductions afin de traiter le tableau vide.

N’utilisez pas ces méthodes artificiellement pour remplacer chaque boucle de manipulation du DOM. Les catégories sans équipement doivent toujours être affichées avec un effectif de zéro.

### Mission 3 — Introduire l’immuabilité

Transformez la logique de `modifierEtat()` et `modifierDisponibilite()` en fonctions qui reçoivent une liste, un identifiant et la nouvelle valeur, puis retournent une **nouvelle liste**. Créez un nouvel objet pour l’équipement modifié, sans changer l’objet d’origine. Les objets non modifiés peuvent être partagés.

La partie chargée des événements peut remplacer la référence courante `equipements` par le résultat puis actualiser l’affichage. Un identifiant inconnu doit laisser les valeurs des équipements inchangées.

### Mission 4 — Créer des fonctions pures

Extrayez la logique métier : recherche, totaux, répartition, sélection des équipements à réparer et mises à jour.

Ces fonctions doivent recevoir leurs données en paramètres et retourner un résultat, sans lire le DOM, sans modifier leurs paramètres et sans dépendre de `equipements`. Lisez les filtres dans la partie interface, puis transmettez leurs valeurs aux traitements. L’affichage et les événements restent des effets de bord explicites.

### Mission 5 — Simplifier et factoriser

Réduisez les conditions imbriquées, extrayez le formatage des prix répété et donnez une responsabilité claire à chaque fonction. Utilisez `const` lorsque la variable n’est pas réaffectée, tout en vous rappelant que `const` ne rend pas un objet immuable.

### Mission 6 — Bonus : composer les traitements

Refactorisez `afficherValeurPortablesDisponibles()` en une suite de fonctions unaires composées avec `pipe()` : sélectionner les disponibles, sélectionner les portables, extraire les prix, puis calculer leur somme. Séparez l’affichage du résultat de cette composition. Vérifiez le résultat sur le parc initial et sur un tableau vide.

## ✅ Tests et validation

### Comparer les comportements

Relevez d’abord les résultats de la version initiale. Après refactorisation, rejouez les mêmes scénarios. Rechargez la page avant chaque scénario de modification indépendant.

| Scénario sur les données initiales | Résultat attendu |
| --- | --- |
| Aucun filtre | 24 équipements, dans l’ordre des identifiants 1 à 24 |
| Valeur totale du parc | 25 850 CHF |
| Valeur du stock disponible | 8 050 CHF |
| Valeur des portables disponibles | 3 600 CHF |
| Répartition | 6 portables, 6 fixes, 6 écrans, 3 imprimantes, 3 serveurs |
| État « À réparer » | Identifiants 3, 11, 17, 21 ; compteur global : 4 |
| État « Hors service » | Identifiants 6, 12, 24 |
| Recherche `  LENOVO  ` | Identifiants 1, 5, 10 |
| Portable + Bon + recherche `lenovo` | Identifiant 1 uniquement |
| Recherche `introuvable` | Aucun résultat ; statistiques globales inchangées |
| Passer l’équipement 1 à « Attribué » | Stock disponible : 6 650 CHF ; portables disponibles : 2 200 CHF ; valeur totale inchangée |
| Passer l’équipement 3 à « Bon » avec le filtre « À réparer » actif | La ligne 3 disparaît ; 3 équipements restent à réparer ; valeurs financières inchangées |
| Passer l’équipement 6 à « Disponible » | Stock disponible : 8 950 CHF ; portables disponibles : 4 500 CHF, malgré son état hors service |
| Effacer les filtres après une modification | 24 lignes ; modification conservée |
| Recharger la page | Données et statistiques initiales restaurées |

### Vérifier les fonctions extraites

Ajoutez vos vérifications avec `console.assert()` à la fin de `ex10.js`, dans une fonction `testerRefactorisation()` que vous exécuterez depuis la console du navigateur. Utilisez de petits jeux de données indépendants du parc affiché. Aucun fichier ni outil supplémentaire n’est nécessaire.

Vérifiez au minimum :

- Les identifiants retournés par un filtre et une recherche combinés, dans le bon ordre.
- Les sommes et les effectifs par catégorie.
- Un tableau vide : liste vide, totaux à zéro, effectifs à zéro, aucune exception.
- Une recherche sans résultat et un équipement hors service disponible.
- Les nouvelles valeurs retournées par les deux fonctions de modification et le cas d’un identifiant inconnu.
- L’absence de mutation pour **chacune** des deux modifications : conservez une copie des valeurs initiales, appelez la fonction, puis comparez les données sources avec cette copie. Vérifiez également que la liste retournée et l’objet modifié ont de nouvelles références et que les autres équipements conservent leurs valeurs.

La conservation du comportement et l’immuabilité sont deux vérifications distinctes : les résultats métier doivent être identiques à ceux du programme initial, tandis que les mutations des paramètres doivent disparaître. Les vérifications de non-mutation ne sont donc pas censées réussir sur les fonctions initiales.

## 🏁 Critères de réussite

- Tous les scénarios métier donnent les résultats attendus, y compris les cas limites.
- Les traitements utilisent les méthodes de tableaux à bon escient.
- Les fonctions métier sont pures et les mises à jour respectent l’immuabilité.
- Les calculs, l’affichage et les événements ont des responsabilités distinctes.
- Le code est plus lisible, avec moins de répétitions et des noms explicites.
- Vous savez expliquer deux transformations et leur intérêt concret.
- Le HTML, le CSS, les données initiales et la structure du projet sont conservés.

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
