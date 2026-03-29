#  TP React Débutant

Ce projet est un TP d’introduction à **React.js** qui illustre plusieurs concepts fondamentaux du framework à travers des exemples simples et pratiques.

---

##  Objectifs pédagogiques

Ce TP couvre les notions suivantes :

- ✅ Composants React
- ✅ Gestion de l’état avec `useState`
- ✅ Formulaires contrôlés et non contrôlés
- ✅ Lifting State Up
- ✅ Context API (`useContext`)
- ✅ Interaction utilisateur

---

##  Structure du projet
```
tp-react/
│── public/
│ │── index.html
│
│── src/
│ │── App.js
│ │── index.js
│ │
│ │── components/
│ │ │── FormulaireControle.js
│ │ │── FormulaireNonControle.js
│ │ │── TemperatureConvertor.js
│ │ │── TemperatureInput.js
│ │ │── Profil.js
│ │
│ │── context/
│ │ │── UtilisateurContext.js
│ │
│ │── styles/
│ │ │── App.css
│
│── package.json
│── README.md

```
## 🧩 Fonctionnalités

### 📝 Formulaire contrôlé
- Utilise `useState`
- Champs liés à l’état React
- Mise à jour en temps réel

```js
const [nom, setNom] = useState('');
```

### Formulaire non contrôlé
  - Utilise useRef
  - Accès direct aux valeurs du DOM
  ```js
  const nomRef = useRef();
  ```

### Context API (Profil utilisateur)
  - Utilisation de createContext et useContext
  - Gestion globale des données utilisateur

  - Fonctionnalités :

    - Affichage du nom
    - Déconnexion
### Capture d'ecran 

https://github.com/user-attachments/assets/2087a398-ff07-4ae8-93ca-ada698eaed28

## Technologies utilisées
  - React.js
  - JavaScript
  - HTML / CSS

## Auteur
```
Ait Hmad Oussama
```
