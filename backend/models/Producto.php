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
                activo
            FROM productos
            WHERE activo = 1
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
                activo
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
                imagen
            )
            VALUES (
                :nombre,
                :descripcion,
                :categoria,
                :formato,
                :imagen
            )
        ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute([
            "nombre" => $datos["nombre"],
            "descripcion" => $datos["descripcion"] ?? null,
            "categoria" => $datos["categoria"] ?? null,
            "formato" => $datos["formato"] ?? null,
            "imagen" => $datos["imagen"] ?? null
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
                imagen = :imagen
            WHERE id = :id
        ";

        $stmt = $this->db->prepare($sql);

        return $stmt->execute([
            "id" => $id,
            "nombre" => $datos["nombre"],
            "descripcion" => $datos["descripcion"] ?? null,
            "categoria" => $datos["categoria"] ?? null,
            "formato" => $datos["formato"] ?? null,
            "imagen" => $datos["imagen"] ?? null
        ]);
    }

    public function eliminar(int $id): bool
    {
        $sql = "
            DELETE FROM productos
            WHERE id = :id
        ";

        $stmt = $this->db->prepare($sql);

        return $stmt->execute([
            "id" => $id
        ]);
    }
}