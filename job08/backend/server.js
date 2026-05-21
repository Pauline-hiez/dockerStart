const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Serveur OK' });
});

app.get('/db-test', (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    connection.connect((err) => {
        if (err) {
            return res.json({
                message: 'Connexion MySQL échouée',
                error: err.message
            });
        }

        res.json({
            message: 'Connexion MySQL réussie'
        });
    });
});

app.listen(3000, () => {
    console.log('Serveur lancé sur le port 3000');
});