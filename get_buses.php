<?php
// config.php betöltése az adatbázis kapcsolathoz
include('config.php');

// SQL lekérdezés a buszok lekérésére
$sql = "SELECT * FROM buszok";
$result = $conn->query($sql);

// Ha van találat, azokat tömbbé alakítjuk és JSON formátumban visszaküldjük
$buses = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $buses[] = $row;
    }
    echo json_encode($buses);  // JSON formátumban visszaküldjük az adatokat
} else {
    echo json_encode([]);  // Ha nincs adat, üres tömböt adunk vissza
}

// Kapcsolat lezárása
$conn->close();
?>