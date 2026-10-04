<?php

require_once __DIR__ . "/../models/UsuarioAdmin.php";
require_once __DIR__ . "/../middleware/Auth.php";

class AuthController
{
    private UsuarioAdmin $usuarioAdmin;

    public function __construct(PDO $db)
    {
        $this->usuarioAdmin = new UsuarioAdmin($db);
    }

    public function login(array $datos): array
    {
        $email = trim($datos["email"] ?? "");
        $password = $datos["password"] ?? "";

        if ($email === "" || $password === "") {
            return [
                "ok" => false,
                "mensaje" => "El correo y la contraseña son obligatorios"
            ];
        }

        $usuario = $this->usuarioAdmin->buscarPorEmail($email);

        if ($usuario === null) {
            return [
                "ok" => false,
                "mensaje" => "Credenciales incorrectas"
            ];
        }

        if (!password_verify($password, $usuario["password"])) {
            return [
                "ok" => false,
                "mensaje" => "Credenciales incorrectas"
            ];
        }

        Auth::iniciarSesion($usuario);

        return [
            "ok" => true,
            "mensaje" => "Inicio de sesión correcto",
            "usuario" => [
                "id" => $usuario["id"],
                "nombre" => $usuario["nombre"],
                "email" => $usuario["email"]
            ]
        ];
    }

    public function usuarioActual(): array
    {
        if (!Auth::estaAutenticado()) {
            return [
                "ok" => false,
                "mensaje" => "No hay una sesión activa"
            ];
        }

        return [
            "ok" => true,
            "usuario" => Auth::usuario()
        ];
    }
}