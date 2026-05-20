<?php

$host = "db";
$dbname = "lamp_demo";
$user = "dev";
$password = "devmdp";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname",
        $user,
        $password
    );

    echo "<h1>Connexion MySQL réussie</h1>";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}

phpinfo();
