# DK Architecture — Migration Next.js

**Date :** 2026-06-08  
**Statut :** Approuvé  

---

## Contexte

Le site `dkarchitecture.be` est actuellement un prototype en HTML/CSS/JS statique (un seul fichier `index.html`). L'objectif est de le migrer en Next.js 15 déployé sur Vercel, en ajoutant :

- Un formulaire de contact fonctionnel (email + archive admin)
- Une galerie photo enrichie avec lightbox (29 photos existantes)
- Des animations légères au scroll
- Un score Lighthouse 100/100 maintenu

---

## Stack technique

| Outil | Rôle |
|---|---|
| Next.js 15 App Router | Framework principal |
| TypeScript | Typage |
| Tailwind CSS | Styles (reprend les variables CSS du proto) |
| Vercel | Hébergement + Postgres |
| Resend | Envoi d'emails transactionnels |
| Framer Motion | Animations (import dynamique) |
| `next/image` | Optimisation photos (WebP, lazy loading) |

---

## Architecture

### Routes

```
/                  → page principale (toutes les sections, SSG)
/api/contact       → POST handler (validation + email + BDD)
/admin             → liste des soumissions (protégée par cookie)
/admin/login       → formulaire de connexion admin
```

La page `/` est générée statiquement (SSG) — aucun appel BDD au rendu, performance maximale.

### Structure de fichiers

```
src/
  app/
    page.tsx
    layout.tsx
    api/
      contact/
        route.ts
    admin/
      page.tsx
      login/
        page.tsx
  components/
    Header.tsx
    Hero.tsx
    TrustBar.tsx
    Services.tsx
    Portfolio.tsx
    Lightbox.tsx
    Process.tsx
    About.tsx
    Testimonials.tsx
    ContactForm.tsx
    Footer.tsx
    MotionWrapper.tsx      ← wrapper Framer Motion dynamic
  lib/
    db.ts                  ← client Vercel Postgres
    email.ts               ← client Resend
    auth.ts                ← vérification mot de passe + cookie
  data/
    projects.ts            ← données statiques des projets photo
public/
  photos/                  ← 29 photos existantes, inchangées
  logo-mark.png
  favicon.png
```

---

## Galerie photo & lightbox

### Données projets (`data/projects.ts`)

6 projets statiques correspondant aux dossiers existants :

| Slug | Titre affiché | Dossier | Nb photos |
|---|---|---|---|
| `realisation-bw` | Réalisation Brabant wallon | `photos/realisation-bw/` | 3 |
| `avant-apres` | Avant / Après rénovation | `photos/avant-apres/` | 3 |
| `elegant-bw` | Extension bois élégante | `photos/elegant-bw/` | 4 |
| `cabane-bomal` | Cabane en bois — Bomal | `photos/cabane-bomal/` | 5 |
| `paille-tech` | Construction paille biosourcée | `photos/Paille-Tech/` | 7 |
| `permis-soignies` | Permis — Soignies | `photos/permis-urbanistme-soignies/` | 6 |

Chaque projet contient : `slug`, `title`, `tag`, `cover` (1ère photo), `photos[]` (liste complète).

### Grille portfolio

- 3×2 desktop → 2×3 tablette → 1 colonne mobile
- `next/image` en couverture avec `sizes` adapté à la grille
- Hover : élévation légère (existant)

### Lightbox

- Composant custom — aucune lib externe
- Chargé uniquement au premier clic (`dynamic(() => import('./Lightbox'), { ssr: false })`)
- Navigation : flèches gauche/droite, touches ← → clavier, swipe tactile, Échap pour fermer, clic hors image pour fermer
- `next/image` avec `priority` sur la photo active + préchargement de la suivante
- Compteur "2 / 7" affiché en bas
- Fond sombre semi-transparent, image en `object-contain`

---

## Formulaire de contact

### API Route `/api/contact` (POST)

1. Validation serveur : `nom` et `email` obligatoires, format email vérifié
2. Envoi email HTML via **Resend** vers `fk@dkarchitecture.be`
3. Stockage en Vercel Postgres

**Schéma BDD :**

```sql
CREATE TABLE submissions (
  id          SERIAL PRIMARY KEY,
  created_at  TIMESTAMPTZ DEFAULT now(),
  nom         TEXT NOT NULL,
  email       TEXT NOT NULL,
  telephone   TEXT,
  type_projet TEXT,
  budget      TEXT,
  message     TEXT,
  lu          BOOLEAN DEFAULT false
);
```

4. Réponse JSON `{ success: true }` — les erreurs techniques ne sont pas exposées au client

### Composant ContactForm (client)

- `useActionState` React 19 — pas de lib de formulaire externe
- États : `idle` → `loading` (bouton désactivé) → `success` → `error`
- Validation HTML5 + vérification email côté client en complément
- Mêmes champs que le proto : nom, téléphone, email, type projet, budget, message

---

## Admin

### Protection

- Middleware Next.js : vérifie le cookie httpOnly `admin_session`
- Valeur du cookie = `sha256(ADMIN_PASSWORD)` (variable d'env Vercel)
- Si absent ou invalide → redirect `/admin/login`

### Page login (`/admin/login`)

- Formulaire simple (mot de passe)
- POST Server Action → vérifie le mot de passe, pose le cookie, redirect `/admin`

### Page admin (`/admin`)

- Tableau des soumissions, triées par `created_at` DESC
- Colonnes : date, nom, email, téléphone, type projet, budget, extrait message
- Clic sur une ligne → détail complet (drawer ou ligne expandée)
- Toggle "Marquer comme lu" (update colonne `lu`)
- Compteur de demandes non lues en haut
- Bouton déconnexion (supprime le cookie)
- HTML + Tailwind uniquement — aucun framework UI externe

---

## Animations

### Principe

- Framer Motion importé dynamiquement, jamais dans le bundle initial
- Aucune animation ne bloque le premier paint
- `prefers-reduced-motion` respecté : si activé, toutes les variants passent en `{ opacity: 1, y: 0 }` immédiatement

### Animations prévues

| Élément | Animation | Durée |
|---|---|---|
| Sections au scroll | Fade-in + translateY(20px → 0) | 0.5s ease-out |
| Cartes (services, projets) | Idem, stagger 0.08s | 0.5s |
| Hero | Fade-in au chargement | 0.6s |
| Ouverture lightbox | Fade fond + scale image 0.95→1 | 0.2s |

### Ce qu'on n'anime pas

- Aucun parallaxe (recalcul layout au scroll)
- Aucune animation en boucle
- Pas d'animation sur les images (risque CLS)

---

## Variables d'environnement

```env
# Resend
RESEND_API_KEY=

# Vercel Postgres (auto-injecté par Vercel)
POSTGRES_URL=

# Admin
ADMIN_PASSWORD=
```

---

## Hors scope

- CMS ou interface d'édition de contenu
- Authentification multi-utilisateurs
- Internationalisation
- Formulaire multiétape
