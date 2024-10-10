const express = require("express");
const client = require("prom-client");

const app = express();

// Créer un registre de métriques
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Créer un compteur personnalisé (par exemple pour suivre le nombre de requêtes)
const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Nombre total de requêtes HTTP reçues",
  labelNames: ["method", "path"],
});

// Middleware pour compter les requêtes HTTP
app.use((req, res, next) => {
  httpRequestCounter.labels(req.method, req.path).inc();
  next();
});

// Exposer le point /metrics pour Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Exposer un point de test simple
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Lancer l'application
app.listen(3000, () => {
  console.log("Serveur Node.js démarré sur le port 3000");
});
