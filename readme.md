## Getting Started

### Prérequis

- Docker
- Docker Compose

### Installation

Construisez et démarrez les conteneurs Docker :
`  docker-compose up --build
 `

### Configuration

- Le service API est défini dans le répertoire `api/`.
- Les informations d'identification de la base de données sont stockées dans le répertoire `db/` et sont référencées dans le fichier `docker-compose.yml`.

### Accéder aux services

- Le service API sera disponible à l'adresse `http://localhost:3000`.
- Grafana sera disponible à l'adresse `http://localhost:3001`.

### Variables d'environnement

- `GF_SECURITY_ADMIN_PASSWORD__FILE` : Chemin vers le fichier contenant le mot de passe administrateur de Grafana, défini dans `docker-compose.yml`.

### Secret

Configurer les secrets comme bon vous semble.

### Volumes

- `pgdata` : Stockage persistant pour la base de données PostgreSQL.
- `grafana-storage` : Stockage persistant pour Grafana.

### Réseaux

- `frontend` : Réseau pour les services frontend.
- `backend` : Réseau pour les services backend.

## Monitoring

Prometheus et Grafana sont utilisés pour la surveillance de l'application. La configuration de Prometheus est fournie dans `prometheus.yml`.
