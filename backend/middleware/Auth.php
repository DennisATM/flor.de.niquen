<?php

class Auth
{
    public static function iniciarSesion(array $usuario): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        $_SESSION["admin"] = [
            "id" => $usuario["id"],
            "nombre" => $usuario["nombre"],
            "email" => $usuario["email"]
        ];
    }

    public static function estaAutenticado(): bool
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        return isset($_SESSION["admin"]);
    }

    public static function usuario(): ?array
    {
        if (!self::estaAutenticado()) {
            return null;
        }

        return $_SESSION["admin"];
    }

    public static function cerrarSesion(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        $_SESSION = [];

        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();

            setcookie(
                session_name(),
                "",
                time() - 42000,
                $params["path"],
                $params["domain"],
                $params["secure"],
                $params["httponly"]
            );
        }

        session_destroy();
    }

    public static function requerirAutenticacion(): ?array
    {
        if (!self::estaAutenticado()) {
            http_response_code(401);

            return [
                "ok" => false,
                "mensaje" => "No autorizado"
            ];
        }

        return null;
    }
}