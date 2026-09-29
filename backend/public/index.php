<?php

header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

require_once __DIR__ . "/../routes/api.php";

$metodo = $_SERVER["REQUEST_METHOD"];
$ruta = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

$respuesta = manejarRuta($metodo, $ruta);

echo json_encode(
    $respuesta,
    JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT
);