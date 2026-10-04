<?php

class Producto
{
    private PDO $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    public function obtenerTodos(): array
    {
        $sql = "
            SELECT
                id,
                nombre,
                descripcion,
                categoria,
                formato,
                imagen,
                activo,
                mostrar_home
            FROM productos
            WHERE activo = 1
            ORDER BY id ASC
        ";

        $stmt = $this->db->query($sql);

        return $stmt->fetchAll();
    }

    public function obtenerTodosAdmin(): array
    {
        $sql = "
            SELECT *
            FROM productos
            ORDER BY activo DESC, id ASC
        ";

        $stmt = $this->db->query($sql);

        return $stmt->fetchAll();
    }

    public function obtenerParaHome(): array
    {
        $sql = "
            SELECT *
            FROM productos
            WHERE activo = 1
            AND mostrar_home = 1
            ORDER BY id ASC
        ";

        $stmt = $this->db->query($sql);

        return $stmt->fetchAll();
    }

    public function obtenerPorId(int $id): ?array
    {
        $sql = "
            SELECT
                id,
                nombre,
                descripcion,
                categoria,
                formato,
                imagen,
                activo,
                mostrar_home
            FROM productos
            WHERE id = :id
            AND activo = 1
            LIMIT 1
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            "id" => $id
        ]);

        $producto = $stmt->fetch();

        return $producto ?: null;
    }

    public function crear(array $datos): int
    {
        $sql = "
            INSERT INTO productos (
                nombre,
                descripcion,
                categoria,
                formato,
                imagen,
                mostrar_home
            )
            VALUES (
                :nombre,
                :descripcion,
                :categoria,
                :formato,
                :imagen,
                :mostrar_home
            )
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            "nombre" => $datos["nombre"],
            "descripcion" => $datos["descripcion"] ?? null,
            "categoria" => $datos["categoria"] ?? null,
            "formato" => $datos["formato"] ?? null,
            "imagen" => $datos["imagen"] ?? null,
            "mostrar_home" => $datos["mostrar_home"] ?? 0
        ]);

        return (int) $this->db->lastInsertId();
    }

    public function actualizar(int $id, array $datos): bool
    {
        $sql = "
            UPDATE productos
            SET
                nombre = :nombre,
                descripcion = :descripcion,
                categoria = :categoria,
                formato = :formato,
                imagen = :imagen,
                mostrar_home = :mostrar_home
            WHERE id = :id
        ";

        $stmt = $this->db->prepare($sql);

        return $stmt->execute([
            "id" => $id,
            "nombre" => $datos["nombre"],
            "descripcion" => $datos["descripcion"] ?? null,
            "categoria" => $datos["categoria"] ?? null,
            "formato" => $datos["formato"] ?? null,
            "imagen" => $datos["imagen"] ?? null,
            "mostrar_home" => $datos["mostrar_home"] ?? 0
        ]);
    }

    public function eliminar(int $id): bool
    {
        $sql = "
            UPDATE productos
            SET activo = 0
            WHERE id = :id
        ";

        $stmt = $this->db->prepare($sql);

        return $stmt->execute([
            "id" => $id
        ]);
    }

    public function restaurar(int $id): bool
    {
        $sql = "
            UPDATE productos
            SET activo = 1
            WHERE id = :id
            AND activo = 0
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            "id" => $id
        ]);

        return $stmt->rowCount() > 0;
    }
}