# 🃏 DOOZTCG – Site e-commerce

Projet de site e-commerce pour la vente de jeux de cartes à collectionner et de jeux de société.

---

## 🚀 Tech Stack

- **Frontend** : React + TypeScript
- **UI** : Tailwind CSS + shadcn/ui + Lucide Icons
- **Bundler** : Vite
- **Gestion des tickets** : Jira (intégré)
- **Repository** : Bitbucket

---

## 🧱 Fonctionnalités actuelles

- ✅ Header responsive (desktop / mobile)
    - Navigation `Catalogue` avec mega menu (6 colonnes)
    - Menu `Précommandes` scrollable horizontalement
    - Menu mobile avec `Sheet` et sous-menus en accordéon
- 🔍 Barre de recherche intégrée avec loupe cliquable
- 👤 Accès Compte & Panier
- 🎨 Thème sobre et foncé, fidèle à la maquette du client

---

## 📁 Structure principale

```
src/
├── components/
│   ├── header/
│   │   ├── Header.tsx
│   │   ├── NavBar.tsx
│   │   ├── NavMobile.tsx
│   │   ├── SearchBar.tsx
│   │   └── AccountActions.tsx
│   └── layout/
│       └── Layout.tsx
├── pages/
│   └── HomePage.tsx (à venir)
└── App.tsx
```

---

## 🔧 Installation

```bash
npm install
npm run dev
```

---

## 📌 À faire prochainement

- [ ] Ajouter le **Hero + sections de la homepage**
- [ ] Intégrer **React Router**
- [ ] Branchement avec une fausse API ou CMS headless

---

## 🧑‍💻 Développement

Ce projet est en cours de développement par **Maxime** pour un client TCG.  
Le header est finalisé, la suite est à venir dans les prochains jours 🚧

---

## 📄 Licence

Projet privé – Tous droits réservés.
