# Job 05 — Build Docker multi-stage (API + Frontend)

## Objectif
Construire et lancer les conteneurs du projet en multi-stage, puis vérifier l'exécution côté terminal et navigateur.

## Captures d'écran (ordre chronologique)

### 1) Préparation du projet
![Capture 01 - Préparation](<src/img/Capture d'écran 2026-03-18 094947.png>)
Commentaire : point de départ du job avec la structure du projet et les premiers tests de commandes.

### 2) Première vérification en terminal
![Capture 02 - Vérification terminal](<src/img/Capture d'écran 2026-03-18 095854.png>)
Commentaire : contrôle des commandes Docker et de l'état initial avant build.

### 3) Premier build de l'image
![Capture 03 - Build initial](<src/img/Capture d'écran 2026-03-18 100342.png>)
Commentaire : lancement de la commande `docker build` pour créer l'image.

### 4) Analyse de sortie du build
![Capture 04 - Logs de build](<src/img/Capture d'écran 2026-03-18 100430.png>)
Commentaire : lecture des logs pour identifier les étapes exécutées pendant la construction.

### 5) Détection d'une erreur de build
![Capture 05 - Erreur build](<src/img/Capture d'écran 2026-03-18 100503.png>)
Commentaire : erreur observée pendant la compilation, nécessitant correction du Dockerfile/contexte.

### 6) Ajustement du Dockerfile
![Capture 06 - Correction Dockerfile](<src/img/Capture d'écran 2026-03-18 110129.png>)
Commentaire : adaptation de la configuration pour correspondre à la structure réelle du projet.

### 7) Nouveau test après correction
![Capture 07 - Rebuild](<src/img/Capture d'écran 2026-03-18 110413.png>)
Commentaire : relance du build après mise à jour des instructions.

### 8) Résolution de dépendances/fichiers
![Capture 08 - Vérification fichiers](<src/img/Capture d'écran 2026-03-18 110508.png>)
Commentaire : validation de la présence des fichiers nécessaires au build (`package.json`, sources, etc.).

### 9) Build final validé
![Capture 09 - Build réussi](<src/img/Capture d'écran 2026-03-18 110857.png>)
Commentaire : construction de l'image terminée avec succès.

### 10) Lancement du conteneur
![Capture 10 - Run conteneur](<src/img/Capture d'écran 2026-03-18 110922.png>)
Commentaire : démarrage du conteneur avec exposition des ports (`-p`).

### 11) Vérification de l'exécution
![Capture 11 - Conteneur actif](<src/img/Capture d'écran 2026-03-18 111055.png>)
Commentaire : confirmation que le service tourne correctement.

### 12) Contrôle dans le navigateur
![Capture 12 - Test navigateur 1](<src/img/Capture d'écran 2026-03-18 111933.png>)
Commentaire : test de l'accès HTTP local après démarrage du conteneur.

### 13) Validation visuelle
![Capture 13 - Test navigateur 2](<src/img/Capture d'écran 2026-03-18 112030.png>)
Commentaire : vérification du rendu final de l'application.

### 14) Validation finale
![Capture 14 - Validation finale](<src/img/Capture d'écran 2026-03-18 112040.png>)
Commentaire : dernier contrôle fonctionnel du workflow Docker du job.

## Commandes principales utilisées

```bash
# Build backend/api
docker build -t api-multistage .

# Exécuter l'API
docker run -p 3001:3000 api-multistage

# Build frontend depuis la racine job05
docker build -f frontend/Dockerfile -t react-prod .

# Exécuter le frontend
docker run -p 8080:80 react-prod
```

## Notes de dépannage
- Si un port est occupé (`port is already allocated`), changer le port hôte (ex: `3001:3000`) ou arrêter le service qui l'utilise.
- Si un nom de conteneur est déjà pris (`name is already in use`), supprimer l'ancien conteneur avec `docker rm -f <nom>`.
