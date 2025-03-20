# Guide de Contribution

Merci de l'intérêt que vous portez à contribuer au projet "Préparer le BIA" ! Ce guide vous aidera à comprendre comment participer au développement et à l'amélioration de l'application.

## Comment contribuer

Voici plusieurs façons de contribuer au projet :

1. **Signalement de bugs** : Créez une issue sur GitHub pour signaler un problème
2. **Suggestions d'améliorations** : Proposez de nouvelles fonctionnalités ou des améliorations
3. **Correction de documentation** : Améliorez ou corrigez la documentation
4. **Contribution au code** : Ajoutez de nouvelles fonctionnalités ou corrigez des bugs

## Processus de développement

### 1. Configuration de l'environnement de développement

Suivez les instructions du [Guide d'Installation](./installation.md) pour configurer votre environnement local.

### 2. Workflow Git

Nous utilisons un workflow Git basé sur les branches :

1. Forkez le dépôt
2. Créez une branche pour votre fonctionnalité ou correction
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   # ou
   git checkout -b fix/nom-du-bug
   ```
3. Faites vos modifications
4. Testez vos changements
5. Soumettez une Pull Request vers la branche `main`

### 3. Bonnes pratiques de code

#### Style de code

- Utilisez ESLint pour valider votre code JavaScript
- Respectez le style de code existant
- Commentez votre code lorsque nécessaire

```bash
# Vérifier la conformité du code avec ESLint
cd frontend
npm run lint

cd ../api
npm run lint
```

#### Tests

Avant de soumettre une Pull Request, assurez-vous que :

- Votre code fonctionne correctement
- Vous avez testé manuellement les fonctionnalités que vous avez modifiées
- Vous avez ajouté des tests automatisés si nécessaire

### 4. Soumission de Pull Requests

Lors de la soumission d'une Pull Request, veuillez :

1. Décrire clairement les changements apportés
2. Référencer les issues associées (par exemple, "Fixes #123")
3. Expliquer comment tester vos modifications
4. Fournir des captures d'écran ou des vidéos si pertinent

## Ajout de nouvelles questions

L'un des moyens les plus utiles de contribuer est d'ajouter de nouvelles questions pour enrichir la base de données.

### Format des questions

Les questions doivent suivre ce format :

```json
{
  "content": "Texte de la question",
  "image_url": "URL de l'image (optionnel)",
  "choices": [
    {
      "id": "choice_1",
      "text": "Texte du choix 1",
      "correct": true
    },
    {
      "id": "choice_2",
      "text": "Texte du choix 2",
      "correct": false
    },
    {
      "id": "choice_3",
      "text": "Texte du choix 3",
      "correct": false
    },
    {
      "id": "choice_4",
      "text": "Texte du choix 4",
      "correct": false
    }
  ]
}
```

### Procédure pour ajouter des questions

1. Créez un fichier JSON contenant vos questions
2. Utilisez le script d'importation pour les ajouter à la base de données :

```bash
cd api
node bin/importQuestions.js chemin/vers/vos-questions.json
```

## Amélioration de la documentation

La documentation est essentielle pour aider les utilisateurs et les développeurs. Voici comment contribuer :

1. Corrigez les erreurs ou améliorez la clarté
2. Ajoutez des exemples ou des cas d'utilisation
3. Traduisez la documentation dans d'autres langues
4. Ajoutez des tutoriels ou des guides pour les fonctionnalités complexes

## Communication

- **GitHub Issues** : Pour les bugs, suggestions et discussions techniques
- **Email** : Pour les questions plus générales, contactez alexandru@popescu.is

## Code de conduite

### Nos engagements

- Respecter les opinions et perspectives des autres
- Accepter les critiques constructives
- Se concentrer sur ce qui est meilleur pour la communauté
- Faire preuve d'empathie envers les autres membres de la communauté

### Comportements inacceptables

- Utilisation de langage ou d'imagerie à caractère sexuel
- Trolling, commentaires insultants/désobligeants, et attaques personnelles
- Harcèlement public ou privé
- Publication d'informations privées sans autorisation
- Autre conduite pouvant raisonnablement être considérée comme inappropriée

## Licence

En contribuant à ce projet, vous acceptez que vos contributions soient sous la même licence que le projet (MIT License). 