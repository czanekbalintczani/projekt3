<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$host = 'localhost';     // Adatbázis szerver
$username = 'root';      // Adatbázis felhasználónév (XAMPP esetén alapértelmezett: root)
$password = '';          // Adatbázis jelszó (XAMPP esetén alapértelmezett: üres)
$dbname = 'gyoribuszok'; // Az adatbázis neve

// Kapcsolódás az adatbázishoz
$conn = new mysqli($host, $username, $password, $dbname);

// Ellenőrizzük, hogy sikerült-e a kapcsolat
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>