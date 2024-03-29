import { Header } from '../assets/scripts/header.js';

<!-- sectionTitle: Continuous Integration Oriented (Trunk-based Dev) -->

## Continuous Integration Oriented (Trunk-based Dev)

---

<Header title="Intégration Continue" section="Continuous Integration Oriented (Trunk-based Dev)" />

### Principes de base

[Trunk-Based Development](http://kean.github.io/post/trunk-based-development)

<div class="wrap">
  <div class="card-50 bg-white">
    <img src="../assets/images/trunk-based-dev-workflow.png" alt="Trunk Based Dev" class="img-50"></img>
    <div class="flex-content">
      <ul class="flexblock specs">
        <li><p>1 branche <code>!=</code> 1 feature, 1 branche <code>=</code> 1 petite révision (2h de taf, 2j maxi)</p></li>
        <li><p>on merge ASAP</p></li>
        <li><p>une seule branche de collaboration (le trunk / <code>master</code>)</p></li>
        <li><p><code>master</code> est toujours stable et déployable</p></li>
        <li><p>chaque révision est déployée en env de test, recette, QA, ...</p></li>
      </ul>
    </div>
  </div>
</div>

---

<Header title="Intégration Continue" section="Continuous Integration Oriented (Trunk-based Dev)" />

### Gestion du scope fonctionnel :

<br/>

Via feature toggle (ou flipping, ou flags)

<br/>

- 1er commit d'une feature implémente le toggle
- généralement au runtime mais peut aussi être réalisé au build
- peuvent servir pour A/B testing
- on merge avec tous les toggles activés
- on peut scoper les releases via toggle

<br/>

Quand une feature est OK, le toggle est supprimé de la codebase.
Sinon c'est plus du toggle mais de la configuration, donc une feature en soi.

<br/>

**La complexité de la gestion des branches est transférée dans la complexité applicative.**

---

<Header title="Intégration Continue" section="Continuous Integration Oriented (Trunk-based Dev)" />

### Gestion des MEP

<img src="../assets/images/trunk-based-dev-releases.png" alt="Trunk Based Dev Releases" class="img-33"></img>

<br/>

- MEP a échéances fixes
  - on crée release branch depuis `master` pour préparer les MEP (QA)
  - on fix les bugs levés par QA sur `master`
  - on **cherry-pick** de `master` vers release-branch
- hotfix
  - on crée une release branch depuis le dernier tag en prod
  - on dev le hotfix sur `master`
  - on **cherry-pick** de `master` vers release-branch
- on peut MEP quand on veut (Continuous Delivery)
- on peut MEP à chaque révision (Continuous Deployment)
  - stade ultime du chemin DevOps
  - un commit mergé dans `master` va automatiquement en prod si pipeline OK

---

<Header title="Intégration Continue" section="Continuous Integration Oriented (Trunk-based Dev)" />

### Prérequis

<br/>

- suppose automatisation totale des tests (acceptance inclus)
- suppose une infra solide
- nécessite provisionning d'environnement
- feature toggle (ou flipping, ou flags) obligatoire

---

<Header title="Intégration Continue" section="Continuous Integration Oriented (Trunk-based Dev)" />

### Avantages

<br/>

- intégration continue effective
- facile de pousser/récupérer du travail transverse
- code review rapides et faciles
- conflits petits et faciles si pas inexistants
- régressions visibles immédiatement
- fluide (pas d'emboutillage, pas de période de freeze)
- scalabilité
- très facile de changer de scope fonctionnel à la demande

---

<Header title="Intégration Continue" section="Continuous Integration Oriented (Trunk-based Dev)" />

### Inconvénients

<br/>

- historique dégueux (impossible de générer un CHANGELOG lisible)
- feature flipping pénible à gérer
  - augmente la complexité
  - augmente la combinatoire des tests
  - gérer les différents environnements
- nécessite une équipe majoritairement senior sur la pratique

---

<Header title="Intégration Continue" section="Continuous Integration Oriented (Trunk-based Dev)" />

### DevOps

Point de vue DevOps c'est aujourd'hui l'état de l'art en matière de gestion de codebase.

<br/>

<div class="wrap">
  <div class="card-50 bg-white">
    <img src="../assets/images/accelerate-webcover.jpg" alt="Accelerate book" class="img-10"></img>
    <div class="flex-content">
      <p>Cf "Accelerate, The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations"</p>
      <p>27 mars 2018</p>
      <p>https://itrevolution.com/book/accelerate/</p>
    </div>
  </div>
</div>
