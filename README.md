# Module 323 — Exercice 10b : refactorisation

## But

Refactoriser, c'est rendre le code plus clair en conservant ses résultats.
Vous travaillez sur un stock de **cinq équipements** : l'interface permet de les emprunter, de les restituer et de filtrer la liste.
Vous allez explorer comment la programmation fonctionnelle peut clarifier les traitements, réduire les répétitions et préserver les données d'origine.

## Démarrer

Ouvrez `src/ex10b.html` dans un navigateur. Le programme fonctionne déjà.

- Le tableau affiche les cinq équipements, avec un bouton **Emprunter** ou **Restituer**.
- Le menu **Afficher** propose quatre vues : tous les équipements, les disponibles, les empruntés et ceux à moins de 100 CHF.
- Le résumé affiche le nombre, les noms et la valeur des équipements disponibles.
- Le filtre change uniquement le tableau. Le résumé reste indépendant du filtre ; le prix est un critère indépendant de la disponibilité.
- Chaque clic met immédiatement à jour le tableau et le résumé.
- Recharger la page restaure le stock initial : **3 disponibles sur 5**, pour **1080 CHF**.

Essayez ces interactions avant de modifier le code.

## Travail demandé

Le programme fonctionne. Pourtant, pourrait-on exprimer ses traitements plus clairement en s'appuyant sur la programmation fonctionnelle ?

Explorez les fonctions placées avant la partie « Interface fournie » de `src/ex10.js`. Pour orienter votre réflexion :

- Quel est le rôle de chaque fonction ? Que reçoit-elle et que renvoie-t-elle ? À quel élément de l'interface correspond-elle ?
- Que font réellement les boucles ? Ont-elles toutes le même objectif ? Quelles notions vues au cours pourraient exprimer ces intentions ?
- Comparez les traitements associés aux différents filtres. Qu'ont-ils en commun ? Qu'est-ce qui varie ? Comment pourriez-vous conserver un seul traitement tout en lui permettant d'appliquer différentes règles ?
- Après un appel à `changerDisponibilite()`, que deviennent les données transmises à la fonction ? Comment pourriez-vous le constater ? Cela pourrait-il poser problème si l'on souhaitait conserver l'état précédent du stock ?
- Comment distinguer une amélioration du code d'un changement de comportement de l'application ?

À partir de vos observations, proposez votre propre refactorisation et justifiez vos choix. Avancez par petites étapes et confrontez vos résultats aux vérifications ci-dessous.

Votre exploration porte uniquement sur les traitements avant l'interface. Vous pouvez ajouter des fonctions. Conservez les noms et les paramètres des fonctions appelées par l'interface ainsi que les données de départ. Le HTML et la partie « Interface fournie » restent à disposition pour observer les résultats.

## Vérifier dans l'interface

Rechargez la page, puis suivez ces étapes dans l'ordre, avant et après refactorisation.

| Action | Résultat attendu |
| --- | --- |
| Ouvrir la page | 5 lignes ; 3 disponibles sur 5 ; 1080 CHF. |
| Choisir « Équipements empruntés » | Écran Dell et Imprimante HP ; résumé inchangé. |
| Choisir « Équipements à moins de 100 CHF » | Clavier Logitech et Souris Logitech ; résumé inchangé. |
| Choisir « Tous les équipements » | Les 5 lignes réapparaissent. |
| Emprunter le Portable Lenovo | Le bouton devient Restituer ; 2 disponibles ; 80 CHF. |
| Choisir « Équipements disponibles » | Seuls le clavier et la souris restent affichés ; résumé inchangé. |
| Emprunter le clavier, puis la souris | Les lignes disparaissent ; message « Aucun équipement ne correspond au filtre. » ; 0 CHF ; noms : « Aucun ». |
| Choisir « Équipements à moins de 100 CHF » | Le clavier et la souris sont affichés, même empruntés. |
| Choisir « Tous les équipements » | Les 5 lignes réapparaissent, toutes avec le bouton Restituer. |
| Restituer l'Écran Dell | 1 disponible ; 200 CHF ; le résumé affiche Écran Dell. |
| Recharger la page | Le stock initial est restauré. |

## Vérifier l'immuabilité dans la console

L'interface seule ne permet pas de voir si l'ancienne liste a été modifiée.
Après refactorisation, rechargez la page, ouvrez la console avec **F12** et exécutez :

```js
const nouveauStock = changerDisponibilite(equipements, 2);
nouveauStock[1].disponible; // true : l'écran est disponible dans la nouvelle liste
equipements[1].disponible; // false : l'original est inchangé
nouveauStock === equipements; // false : deux listes différentes
nouveauStock[1] === equipements[1]; // false : l'objet modifié a été copié
```

Cet appel isolé ne change pas la page : le clic sur un bouton remplace le stock courant puis appelle `afficher()`.
Vérifiez aussi que `calculerTotal([])` donne `0` et que `selectionnerDisponibles([])` et `extraireNoms([])` donnent `[]`.

Pour terminer, expliquez le rôle des méthodes de tableaux choisies et comment votre solution permet de varier les règles de sélection sans répéter le parcours de la liste.

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" alt="EMF – Informatique">
