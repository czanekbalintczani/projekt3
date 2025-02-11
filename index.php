<?php
// Betöltjük az adatbázis kapcsolatot
include('config.php');

// Lekérdezzük a buszokat az adatbázisból
$sql = "SELECT * FROM buszok";
$result = $conn->query($sql);

// Ellenőrizzük, hogy van-e eredmény
$buses = array();  // Az adatokat ebbe a tömbbe gyűjtjük

if ($result->num_rows > 0) {
    // Ha van, akkor végigiterálunk a sorokon
    while($row = $result->fetch_assoc()) {
        // Képek tömbbé alakítása (ha több kép van)
        $kepek = explode(",", $row['kepek']);
        
        // Busz adatainak tárolása egy asszociatív tömbben
        $bus = array(
            'tipus' => $row['tipus'],
            'rendszam' => $row['rendszam'],
            'evjarat' => $row['evjarat'],
            'kepek' => $kepek // Tömb a képek neveiről
        );
        
        // Hozzáadjuk az egyes buszokat az $buses tömbhöz
        array_push($buses, $bus);
    }
} else {
    // Ha nincsenek buszok, üres tömböt adunk vissza
    $buses = [];
}

// Visszaadjuk a buszokat JSON formátumban
header('Content-Type: application/json');
echo json_encode($buses);

// Bezárjuk a kapcsolatot
$conn->close();
?>
