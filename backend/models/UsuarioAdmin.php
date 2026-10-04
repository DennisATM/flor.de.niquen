<?php

class UsuarioAdmin
{
    private PDO $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    public function buscarPorEmail(string $email): ?array
    {
        $sql = "
            SELECT
                id,
                nombre,
                email,
                password,
                activo
            FROM usuarios_admin
            WHERE email = :email
              AND activo = 1
            LIMIT 1
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            "email" => $email
        ]);

        $usuario = $stmt->fetch();

        return $usuario ?: null;
    }
}