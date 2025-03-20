# Foire Aux Questions (FAQ)

## Questions Générales

### Qu'est-ce que "Préparer le BIA" ?

"Préparer le BIA" est une application web qui aide les étudiants à se préparer au Brevet d'Initiation à l'Aéronautique (BIA). L'application propose des épreuves blanches sous forme de QCM générés dynamiquement, permettant aux utilisateurs de s'entraîner dans des conditions proches de l'examen réel.

### À qui s'adresse cette application ?

L'application s'adresse principalement :
- Aux lycéens et collégiens préparant le BIA
- Aux enseignants encadrant la préparation au BIA
- À toute personne intéressée par l'aéronautique souhaitant tester ses connaissances

### Le BIA, c'est quoi exactement ?

Le Brevet d'Initiation à l'Aéronautique est un diplôme français qui valide un niveau d'initiation à la culture scientifique et technique dans le domaine de l'aéronautique et de l'espace. Il est principalement préparé par des élèves de collèges et lycées.

### L'application est-elle gratuite ?

Oui, l'application est entièrement gratuite et le restera. Elle est développée sans but lucratif pour aider les étudiants dans leur préparation.

## Utilisation

### Comment commencer un test ?

Sur la page d'accueil, cliquez sur le bouton "Commencer un nouveau test". Un test sera généré automatiquement avec des questions aléatoires issues de notre base de données.

### Puis-je reprendre un test commencé plus tard ?

Oui, l'application utilise un système de sessions persistantes. Même si vous fermez votre navigateur ou éteignez votre appareil, vous pourrez reprendre votre test plus tard en cliquant sur "Reprendre un test" sur la page d'accueil.

### Combien de temps dure un test ?

Par défaut, les tests sont configurés pour durer 30 minutes, ce qui correspond à la durée approximative d'une épreuve du BIA. Un chronomètre est affiché pendant le test pour vous aider à gérer votre temps.

### Est-ce que je peux revoir mes réponses après avoir terminé un test ?

Oui, une fois le test terminé, vous accédez à une page de résultats détaillée qui montre :
- Votre score global
- Le temps que vous avez mis pour compléter le test
- Chaque question avec votre réponse et la réponse correcte
- Des explications pour certaines questions

### Faut-il créer un compte pour utiliser l'application ?

Non, aucune inscription n'est nécessaire. L'application utilise des sessions anonymes persistantes qui permettent de suivre votre progression sans avoir à créer de compte.

### L'application fonctionne-t-elle sur mobile ?

Oui, l'application est conçue avec une interface responsive qui s'adapte aux écrans des smartphones et tablettes.

## Questions Techniques

### Quelles technologies sont utilisées ?

L'application utilise :
- React avec Vite pour le frontend
- Node.js avec Fastify pour le backend
- Une base de données SQL pour stocker les questions et sessions
- Docker pour faciliter le déploiement

### Comment puis-je déployer ma propre instance de l'application ?

Vous trouverez un guide détaillé dans [notre documentation de déploiement](./deployment.md).

### Puis-je contribuer au projet ?

Absolument ! Nous accueillons toutes les contributions, qu'il s'agisse de :
- Ajouter de nouvelles questions
- Améliorer le code
- Traduire l'application
- Signaler des bugs

Consultez notre [guide de contribution](./contributing.md) pour plus d'informations.

### Y a-t-il un API public ?

L'API n'est pas spécifiquement conçue pour un usage public, mais vous pouvez explorer la [documentation de l'API](./api-reference.md) si vous souhaitez l'utiliser pour des développements personnels.

## Contenu et Questions

### Combien de questions sont disponibles dans la base de données ?

La base de données contient actuellement plusieurs centaines de questions couvrant tous les domaines du programme du BIA.

### D'où proviennent les questions ?

Les questions sont basées sur :
- D'anciens sujets d'examens du BIA
- Des manuels de préparation au BIA
- Des contributions de professeurs et professionnels de l'aéronautique

### Puis-je proposer de nouvelles questions ?

Oui, nous encourageons les contributions de nouvelles questions. Référez-vous à notre [guide de contribution](./contributing.md) pour connaître le format et la procédure à suivre.

### Les questions couvrent-elles tous les domaines du BIA ?

Oui, les questions couvrent les cinq domaines du programme officiel du BIA :
1. Météorologie et aérologie
2. Aérodynamique, aérostatique et principes du vol
3. Étude des aéronefs
4. Navigation, réglementation, sécurité des vols
5. Histoire et culture de l'aéronautique et du spatial

## Support et Contact

### Que faire si j'ai trouvé un bug ?

Si vous rencontrez un problème, vous pouvez :
- Créer une issue sur GitHub
- Contacter directement l'auteur à alexandru@popescu.is

### Comment suggérer une amélioration ?

Les suggestions sont les bienvenues ! Vous pouvez créer une issue sur GitHub avec l'étiquette "enhancement" ou contacter directement l'auteur.

### Comment contacter l'équipe de développement ?

Pour toute question, vous pouvez contacter Alexandru Popescu à alexandru@popescu.is. 