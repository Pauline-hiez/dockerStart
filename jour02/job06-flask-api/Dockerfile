# Image Python officielle
FROM python:3.11-slim

# Métadonnées
LABEL maintainer="ton.email@example.com"

# Variables d'environnement Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Dossier de travail
WORKDIR /app

# Copier et installer les dépendances
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code source
COPY . .

# Port
EXPOSE 5000

# Commande de démarrage
CMD ["python", "run.py"]


FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
# Utilisateur non-root
RUN useradd -m appuser && chown -R appuser /app
USER appuser
EXPOSE 5000
# Gunicorn avec 4 workers
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "4", "run:app"]
