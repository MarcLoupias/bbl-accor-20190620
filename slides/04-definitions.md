import { Header } from '../assets/scripts/header.js';

<!-- sectionTitle: Définitions -->

## Définitions

---

<Header title="Intégration Continue" section="Définitions" />

```text
Continuous Integration (CI) is a development practice that requires developers
to integrate code into a shared repository several times a day.

Each check-in is then verified by an automated build,
allowing teams to detect problems early.
```

<br/>

[www.thoughtworks.com](https://www.thoughtworks.com/continuous-integration)

---

<Header title="Intégration Continue" section="Définitions" />

<div class="wrap">
  <div class="card-50 bg-white">
    <img src="../assets/images/ci-growing-vs-building.png" alt="Growing vs Building" class="img-50"></img>
    <div class="flex-content">
      <p>C'est la mise en oeuvre connue la plus proche de l'idée qu'un logiciel ne se construit pas, il se grandit.</p>
    </div>
  </div>
</div>

<br/>

cf: Brooks, Frederick P., ["No Silver Bullet: Essence and Accidents of Software Engineering,"](http://www.cs.nott.ac.uk/~pszcah/G51ISS/Documents/NoSilverBullet.html) Computer, Vol. 20, No. 4 (April 1987) pp. 10-19.

---

<Header title="Intégration Continue" section="Définitions" />

### Prérequis

<br/>

<div class="content-center">

<ul class="flexblock specs">
<li>
<blockquote class="text-quote">
You should be able to walk up to the project with a virgin machine, do a checkout, and be able to fully build the system.
</blockquote>
</li>

<li>
<blockquote class="text-quote">
Continuous Integration assumes a high degree of tests which are automated into the software.
</blockquote>
</li>

<li>
<blockquote class="text-quote">
You must put everything required for a build in the source control system.
</blockquote>
</li>
</ul>

</div>

---

<Header title="Intégration Continue" section="Définitions" />

### Prérequis

<br/>

Traduit pour le monde JavaScript :

<br/>

```bash
$ git clone https://github.com/robert/killer-app.git && cd killer-app/
$ npm ci
$ npm build
$ npm start
$ npm test
```

<br/>

- `npm ci` utilise strictement le `package-lock.json` (`npm >= 5.7`).
- les tests unitaires (uniquement) peuvent être exécutés avant le build.

---

<Header title="Intégration Continue" section="Définitions" />

### Etapes :

<br/>

<ul class="flexblock steps">
  <li>
    <h2>commit</h2>
    <p>écrire une révision en local</p>
  </li>
  <li>
    <div class="process step-2"></div>
    <h2>build</h2>
    <p>build un livrable en local et exécuter tous les tests</p>
  </li>
  <li>
    <div class="process step-3"></div>
    <h2>pull master</h2>
    <p>tirer les modifs des autres devs du trunk et rejouer build + tests</p>
  </li>
</ul>

<br/>

<ul class="flexblock steps">
  <li>
    <h2>push trigger CI</h2>
    <p>pousser ce qui trigger l'outil de CI qui fait de son côté build + tests</p>
  </li>
  <li>
    <div class="process step-2"></div>
    <h2>merge dans le trunk</h2>
    <p>si job OK alors la révision est mergée.</p>
  </li>
  <li>
    <div class="process step-3"></div>
    <h2>deploy</h2>
    <p>La révision peut être déployée dans un environnement</p>
  </li>
</ul>

<br/>

Ces étapes sont répétées plusieurs fois **par jour** pour chaque développeur.

---

<Header title="Intégration Continue" section="Définitions" />

### Quels impacts sur la gestion du code source ?

---

<Header title="Intégration Continue" section="Définitions" />

### Quels impacts sur la gestion du code source ?

<br/>

On va parler Git.

<br/>

- *Comment intégrer les contributions ?*
- *Comment organiser l'intégration des contributions ?*

---

<Header title="Intégration Continue" section="Définitions" />

#### Comment intégrer les contributions ?

<br/>

Avec une **branche d'intégration**.

<br/>

- Via une opération de fusion (`merge`) de la branche de travail vers la branche d'intégration.
- La branche d'intégration est désignée sous le terme de "trunk" (tronc) sous SVN.
- Sous Git elle est nommée par défaut `master`, parfois `develop` selon le workflow utilisé.
- C'est le tronc de l'arbre des commits.

---

<Header title="Intégration Continue" section="Définitions" />

#### Comment organiser l'intégration des contributions ?

<br/>

Avec un **workflow**.

<br/>

Les plus courants :

<br/>

- Le feature branching à la papa (GitFlow)
- Continuous Integration Oriented (trunk-based dev)
- Continuous Delivery Oriented (GitHub/GitLab Flow)
