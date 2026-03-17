# Jour 01 — Manipulation Docker (Hello World, Mario, NGINX)

## Objectif
Réaliser les premières manipulations Docker : exécuter un conteneur de test, lancer un conteneur applicatif (Mario), puis gérer un conteneur NGINX avec modification de contenu.

## Job 01 — Hello World

### Commande utilisée
```bash
docker run hello-world
```

### Explication
- `docker run` : télécharge l'image si nécessaire, crée puis lance un conteneur.
- `hello-world` : image de test officielle Docker.
- Le message affiché confirme que Docker fonctionne correctement sur la machine.

### Capture — Installation Docker
![Installation Docker](img/docker.png)
Annotation : validation de l'installation de Docker et de l'environnement.

### Capture — Exécution Hello World
![Hello World Docker](img/hello-world.png)
Annotation : le conteneur affiche le message de succès de Docker.

## Job 02 — Mario

### Principe
Lancer un conteneur applicatif, vérifier les commandes Docker associées, puis visualiser l'application dans le navigateur.

### Capture — Commandes Docker pour Mario
![Commandes Mario](img/image-mario.png)
Annotation : commandes de création/lancement du conteneur et vérification de son état.

### Capture — Résultat dans le navigateur
![Jeu Mario](img/mario.png)
Annotation : rendu de l'application Mario une fois le conteneur démarré.

## Job 03 — Server NGINX

### Étape 1 — Lancer NGINX
Commande type :

```bash
docker run -d -p 8080:80 --name mon_nginx nginx
```

Détail :
- `-d` : exécution en arrière-plan.
- `-p 8080:80` : mappe le port local `8080` vers le port `80` du conteneur.
- `--name mon_nginx` : attribue un nom lisible au conteneur.

![Image 1 - Serveur NGINX](img/1-server-nginx.png)
Annotation : démarrage du conteneur NGINX.

### Étape 2 — Vérifier dans le navigateur
URL testée : `http://localhost:8080`

![Image 2 - NGINX dans le navigateur](img/2-nginx-navigateur.png)
Annotation : affichage de la page par défaut NGINX.

### Étape 3 — Entrer dans le conteneur
Commande type :

```bash
docker exec -it mon_nginx bash
```

![Image 3 - Entrer dans Docker](img/3-entrer-docker.png)
Annotation : accès au shell du conteneur pour modifier les fichiers web.

### Étape 4 — Modifier la page web
Commande type :

```bash
echo "<h1>Mon site NGINX</h1>" > /usr/share/nginx/html/index.html
```

![Image 4 - Modifier le site](img/4-modofier-site.png)
Annotation : remplacement du contenu de `index.html` dans le conteneur.

### Étape 5 — Vérifier la modification
![Image 5 - Site modifié](img/5-modifier-site-navigateur.png)
Annotation : la nouvelle page personnalisée s'affiche dans le navigateur.

### Étape 6 — Arrêter NGINX
Commande :

```bash
docker stop mon_nginx
```

![Image 6 - Arrêt de NGINX](img/6-stop-nginx.png)
Annotation : arrêt propre du conteneur NGINX.

### Étape 7 — Supprimer le conteneur
Commande :

```bash
docker rm mon_nginx
```

![Image 7 - Suppression de NGINX](img/7-supprimer-nginx.png)
Annotation : suppression du conteneur après arrêt.

## Commandes de suppression Docker (récapitulatif)

- Supprimer un conteneur : `docker rm nom_container`
- Supprimer plusieurs conteneurs : `docker rm container1 container2`
- Supprimer tous les conteneurs arrêtés : `docker container prune -f`
- Forcer la suppression d'un conteneur actif : `docker rm -f nom_container`
- Supprimer une image : `docker rmi nom_image`
- Supprimer plusieurs images : `docker rmi image1 image2`
- Supprimer les images non utilisées : `docker image prune -a`
- Forcer la suppression d'une image : `docker rmi -f nom_image`

## Dépannage rapide
- `Bind for 0.0.0.0:<port> failed: port is already allocated` : choisir un autre port ou libérer le port déjà utilisé.
- `container name is already in use` : supprimer l'ancien conteneur (`docker rm -f <nom>`), puis relancer.


