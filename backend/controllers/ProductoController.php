<?php

require_once __DIR__ . "/../models/Producto.php";

class ProductoController
{
    private Producto $producto;

    public function __construct(PDO $db)
    {
        $this->producto = new Producto($db);
    }

    public function index(): array
    {
        return [
            "ok" => true,
            "productos" => $this->producto->obtenerTodos()
        ];
    }

    public function show(int $id): array
    {
        $producto = $this->producto->obtenerPorId($id);

        if ($producto === null) {

            return [
                "ok" => false,
                "mensaje" => "Producto no encontrado"
            ];
        }

        return [
            "ok" => true,
            "producto" => $producto
        ];
    }

    public function store(array $datos): array
    {
        $id = $this->producto->crear($datos);

        return [
            "ok" => true,
            "mensaje" => "Producto creado correctamente",
            "id" => $id
        ];
    }

    public function update(int $id, array $datos): array
    {
        $actualizado = $this->producto->actualizar($id, $datos);

        if (!$actualizado) {

            return [
                "ok" => false,
                "mensaje" => "No fue posible actualizar el producto"
            ];
        }

        return [
            "ok" => true,
            "mensaje" => "Producto actualizado correctamente"
        ];
    }

    public function destroy(int $id): array
    {
        $eliminado = $this->producto->eliminar($id);

        if (!$eliminado) {

            return [
                "ok" => false,
                "mensaje" => "No fue posible eliminar el producto"
            ];
        }

        return [
            "ok" => true,
            "mensaje" => "Producto eliminado correctamente"
        ];
    }

}