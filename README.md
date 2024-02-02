# rog_14_0124

_Faites passer une librairie jQuery vers React_

## Installation

```
yarn
```

## Visualiser l'application

```
yarn run dev
```

## Lancer un build et le visualiser

```
yarn run build
yarn run preview
```

## Technologies

### Framework Javascript & bundler
- React + Vite

### Routeur
- React Router

### State management
- Redux
- React-Redux
- Redux toolkit

### Framework CSS
- Material UI

## Conversion des composants jQuery

### Dropdown Select
- Material UI Select

### Date picker
- Material UI DatePicker

### Table
- Material UI Table, TableContainer, TableHead...
- react-table https://www.npmjs.com/package/react-table

### Modale

Composant choisi pour la conversion en package npm
- sumodal (v1.0.7)  https://www.npmjs.com/package/sumodal

## Utiliser des données mockées

Pour tester les fonctionnalités de la table Employees, il est possible de la peupler avec les données du fichier data/mockdata.json </br>
Pour cela, il faut passer la valeur de USE_MOCK à true dans le fichier config/settings.js  </br>
Ces données sont statiques et ne tiendront pas compte des valeurs saisies dans le formulaires.