import { Header } from '../assets/scripts/header.js';

<!-- sectionTitle: Feature Branching (GitFlow) -->

## Feature Branching (GitFlow)

---

<Header title="Intégration Continue" section="Feature Branching (GitFlow)" />

### Principes de base

[GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)

<div class="wrap">
  <div class="card-50 bg-white">
    <img src="../assets/images/gitflow.png" alt="GitFlow" class="img-33"></img>
    <div class="flex-content">
      <ul class="flexblock specs">
        <li><p>1 branche <code>=</code> 1 feature</p></li>
        <li><p>la branche de collaboration est <code>develop</code>, elle n'est pas déployable</p></li>
        <li><p>on merge dans <code>develop</code> quand PR terminé</p></li>
        <li><p>release candidate sur release branch (bugfix QA only)</p></li>
        <li><p><code>master</code> accueille les tags des livrables (hoftfix prod only)</p></li>
      </ul>
    </div>
  </div>
</div>

---

<Header title="Intégration Continue" section="Feature Branching (GitFlow)" />

### Gestion du scope fonctionnel

<br/>

- `develop` ne contient que le scope de la future release
- on freeze les PR jusqu'à création branche de release
- la branche de release prépare la MEP (QA)

---

<Header title="Intégration Continue" section="Feature Branching (GitFlow)" />

### Gestion des MEP

<br/>

- tags de prod créés sur `master`
- hotfix branch créées depuis les tags de prod
- on déploie donc depuis `master` et pas depuis la branche d'intégration (`develop`)

---

<Header title="Intégration Continue" section="Feature Branching (GitFlow)" />

### Avantages

<br/>

- on est pas exposé au WIP des autres
- on expose pas son WIP
- gestion facile pour le dev de base jusqu'au merge
- gestion débutants facile

---

<Header title="Intégration Continue" section="Feature Branching (GitFlow)" />

### Inconvénients

<br/>

- confusion dans les targets des merges fréquentes
(vers `develop` ? `release/*` ? `hotfix/*` ? `master` ?)
- faible fréquence d'intégration :
  - code review plus longues et difficiles
  - conflits plus fréquents et plus complexes
  - régressions visibles plus tard
  - embouteillages en fin de sprint
- gestion du scope fonctionnel rigide :
  - peut entrainer période freeze des PR avant création branche de release
  - difficile de dev plusieurs itérations en parallèle (plusieurs `develop`)
  - très difficile de changer de scope fonctionnel rapidement
- ne scale pas
- gestion lourde pour le Repo Owner (nombreux reports de code)

---

<Header title="Intégration Continue" section="Feature Branching (GitFlow)" />

### Cercle vicieux

<br/>

Certains inconvénients entrainent d'autres inconvénients :

<br/>

- conflits fréquents et difficiles entrainent peur de la refacto entraine baisse qualité
- régressions détectées plus tard entrainent baisse qualité et baisse productivité
- embouteillages fin sprint entrainent rush et stress
- difficultés à dev en parallèle des versions mal comprises du métier
  - incompréhension des causes techniques
  - incompréhension des conséquences des choix de scopage des releases par le métier
  (cf [Concurrent development of consecutive releases - trunkbaseddevelopment.com](https://trunkbaseddevelopment.com/concurrent-development-of-consecutive-releases/))
- etc ...
