# Job06 - Flask API + Docker

Ce README présente le déroulé du TP avec les captures d’écran dans l’ordre chronologique, et un commentaire pour chaque étape.

## Étape 1 — Préparation du projet
Mise en place du dossier `job06-flask-api` et des fichiers nécessaires (`Dockerfile`, `requirements.txt`, `run.py`, dossier `app`).

![Étape 1](img/Capture%20d%27%C3%A9cran%202026-03-18%20134134.png)

## Étape 2 — Premier build Docker
Première tentative de build de l’image Flask pour valider la structure de base du projet.

![Étape 2](img/Capture%20d%27%C3%A9cran%202026-03-18%20134145.png)

## Étape 3 — Correction du Dockerfile
Ajustement du `Dockerfile` (image Python, copie des dépendances, installation, copie du code, commande de démarrage).

![Étape 3](img/Capture%20d%27%C3%A9cran%202026-03-18%20135313.png)

## Étape 4 — Build relancé
Nouveau build après correction pour obtenir une image exécutable.

![Étape 4](img/Capture%20d%27%C3%A9cran%202026-03-18%20135415.png)

## Étape 5 — Lancement du conteneur
Lancement de l’API dans un conteneur Docker avec publication du port `5000`.

![Étape 5](img/Capture%20d%27%C3%A9cran%202026-03-18%20135427.png)

## Étape 6 — Gestion des conflits (nom de conteneur)
Résolution d’un conflit de nom de conteneur déjà existant, puis relance propre.

![Étape 6](img/Capture%20d%27%C3%A9cran%202026-03-18%20135532.png)

## Étape 7 — Gestion des conflits (port 5000)
Résolution d’un conflit de port déjà alloué, avec arrêt/suppression du conteneur gênant.

![Étape 7](img/Capture%20d%27%C3%A9cran%202026-03-18%20135548.png)

## Étape 8 — Vérification du conteneur actif
Contrôle des conteneurs en cours d’exécution pour confirmer l’état du service Flask.

![Étape 8](img/Capture%20d%27%C3%A9cran%202026-03-18%20135945.png)

## Étape 9 — Test de l’endpoint principal
Test HTTP sur `http://localhost:5000` pour vérifier la réponse JSON de bienvenue.

![Étape 9](img/Capture%20d%27%C3%A9cran%202026-03-18%20140411.png)

## Étape 10 — Test de l’API users
Test HTTP sur `http://localhost:5000/api/users` pour valider les routes API.

![Étape 10](img/Capture%20d%27%C3%A9cran%202026-03-18%20140550.png)

## Étape 11 — Build de variante d’image
Construction d’une image taggée (ex: `flask-api:prod`) pour comparer ou préparer un run dédié.

![Étape 11](img/Capture%20d%27%C3%A9cran%202026-03-18%20140753.png)

## Étape 12 — Comparaison des images Python
Comparaison des tailles entre `python:3.11` et `python:3.11-slim` afin d’optimiser l’image finale.

![Étape 12](img/Capture%20d%27%C3%A9cran%202026-03-18%20141026.png)

## Étape 13 — Analyse des résultats
Lecture des résultats de taille et validation de l’intérêt de l’image `slim`.

![Étape 13](img/Capture%20d%27%C3%A9cran%202026-03-18%20141547.png)

## Étape 14 — Validation finale
Contrôle final du workflow Docker + Flask (build, run, tests API, comparaison d’images).

![Étape 14](img/Capture%20d%27%C3%A9cran%202026-03-18%20142027.png)

---

## Commandes principales utilisées

```bash
docker build -t flask-api:1.0 .
docker run -d -p 5000:5000 --name flask flask-api:1.0
curl http://localhost:5000
curl http://localhost:5000/api/users
docker images python
```
