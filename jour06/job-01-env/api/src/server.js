const express = require('express');
const app = express();

// Lire les variables d'environnement
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_NAME = process.env.DB_NAME || 'mydb';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';

app.get('/', (req, res) => {
    res.json({
        environment: NODE_ENV,
        port: PORT,
        database: { host: DB_HOST, port: DB_PORT, name: DB_NAME, user: DB_USER }
    });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Debug volontaire
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});