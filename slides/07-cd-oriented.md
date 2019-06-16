<!-- sectionTitle: Continuous Delivery Oriented (GitHub/GitLab Flow) -->

## Continuous Delivery Oriented (GitHub/GitLab Flow)

---

<header class="bg-secondary"><span>Intégration Continue </span><svg class="fa-long-arrow-right"><use xlink:href="#fa-long-arrow-right"></use></svg><span> Continuous Delivery Oriented (GitHub/GitLab Flow)</span></header>

### Principes de base

[GitHub Flow](http://scottchacon.com/2011/08/31/github-flow.html) / [GitLab Flow](https://docs.gitlab.com/ee/workflow/gitlab_flow.html)

<img src="../assets/images/github-flow.png"></img>

- 1 branche `=` 1 feature
- une seule branche de collaboration (le trunk / `master`)
- `master` est toujours stable et déployable
- on ouvre la PR dès le début
- on pousse régulièrement sur `origin`
- intégration continue **inversée** (on tire depuis `master` vers PR)
- quand review ok :
  - on verrouille `master` via un bot sur slack
  - on merge `master` dans feature branch
  - on déploie **en prod**
  - on teste, on évalue les métriques, etc ...
- quand test OK on merge la PR et on libère `master`
- si test KO on rollback la prod et on libère `master`

---

<header class="bg-secondary"><span>Intégration Continue </span><svg class="fa-long-arrow-right"><use xlink:href="#fa-long-arrow-right"></use></svg><span> Continuous Delivery Oriented (GitHub/GitLab Flow)</span></header>

### Gestion du scope fonctionnel

<br/>

- si MEP scopée les features non voulues restent en PR
- pas de scope fonctionnel, on pousse **en prod** au fil de l'eau

<br/>

Les features sont seulement priorisées dans le backlog, et : *It's done when it's done*.

---

<header class="bg-secondary"><span>Intégration Continue </span><svg class="fa-long-arrow-right"><use xlink:href="#fa-long-arrow-right"></use></svg><span> Continuous Delivery Oriented (GitHub/GitLab Flow)</span></header>

### Gestion des MEP

<br/>

- pas de releases définies à l'avance, on déploie ASAP **en prod**
- si problème rollback

---

<header class="bg-secondary"><span>Intégration Continue </span><svg class="fa-long-arrow-right"><use xlink:href="#fa-long-arrow-right"></use></svg><span> Continuous Delivery Oriented (GitHub/GitLab Flow)</span></header>

### Prérequis

<br/>

- suppose automatisation totale des tests (acceptance inclus)
- suppose une infra solide
- nécessite provisionning d'environnement
- GitLab Flow propose des variances
(branches d'environnements pour déploiement en fast-forward only, permet QA/recette manuelle avant passage prod)
- GitHub Flow suppose que les devs aient la main sur les outils de monitoring et de déploiement **de prod**

---

<header class="bg-secondary"><span>Intégration Continue </span><svg class="fa-long-arrow-right"><use xlink:href="#fa-long-arrow-right"></use></svg><span> Continuous Delivery Oriented (GitHub/GitLab Flow)</span></header>

### Avantages

<br/>

- très simple à gérer pour les devs
- code review au coeur du workflow
- scalabilité
- pas de feature flipping complexe à gérer

---

<header class="bg-secondary"><span>Intégration Continue </span><svg class="fa-long-arrow-right"><use xlink:href="#fa-long-arrow-right"></use></svg><span> Continuous Delivery Oriented (GitHub/GitLab Flow)</span></header>

### Inconvénients

- historique dégueux si merge policy `>` rebase policy
- infra très avancée + beaucoup de tooling obligatoire
- en rupture avec la culture d'entreprise classique
  - suppression des silos dev / qa / fonctionnels / managers / ops
  - pas de scope fonctionnel
  - c'est top mais mission impossible à faire accepter
