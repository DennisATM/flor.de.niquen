<?php

function manejarRuta($metodo, $ruta)
{
    /*
    |--------------------------------------------------------------------------
    | API principal
    |--------------------------------------------------------------------------
    */

    if ($metodo === "GET" && $ruta === "/api") {

        return [
            "ok" => true,
            "mensaje" => "API Arrocera Flor de Ñiquén funcionando correctamente",
            "version" => "1.0"
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Login de usuario admin
    |--------------------------------------------------------------------------
    */  
    if ($metodo === "POST" && $ruta === "/api/auth/login") {

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/AuthController.php";

        $datos = json_decode(
            file_get_contents("php://input"),
            true
        );

        $controller = new AuthController($pdo);

        return $controller->login($datos ?? []);
    }

    /*
    |--------------------------------------------------------------------------
    | Obtener usuario autenticado
    |--------------------------------------------------------------------------
    */
    if ($metodo === "GET" && $ruta === "/api/auth/usuario") {

        require_once __DIR__ . "/../middleware/Auth.php";
        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/AuthController.php";

        $controller = new AuthController($pdo);

        return $controller->usuarioActual();
    }


    /*
    |--------------------------------------------------------------------------
    | Listar todos los productos
    |--------------------------------------------------------------------------
    */

    if ($metodo === "GET" && $ruta === "/api/productos") {

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $controller = new ProductoController($pdo);

        return $controller->index();
    }

        /*
    |--------------------------------------------------------------------------
    | Crear producto
    |--------------------------------------------------------------------------
    */

    if ($metodo === "POST" && $ruta === "/api/productos") {

        require_once __DIR__ . "/../middleware/Auth.php";

        $autorizacion = Auth::requerirAutenticacion();

        if ($autorizacion !== null) {
            return $autorizacion;
        }

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $datos = json_decode(
            file_get_contents("php://input"),
            true
        );

        $controller = new ProductoController($pdo);

        return $controller->store($datos ?? []);
    }

    /*
    |--------------------------------------------------------------------------
    | Listar productos para home
    |--------------------------------------------------------------------------
    */    
 
    if ($metodo === "GET" && $ruta === "/api/productos/home") {

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $controller = new ProductoController($pdo);

        return $controller->home();
    }

    /*
    |--------------------------------------------------------------------------
    | Listar productos para admin
    |--------------------------------------------------------------------------
    */  
    
    if ($metodo === "GET" && $ruta === "/api/productos/admin") {

        require_once __DIR__ . "/../middleware/Auth.php";

        $autorizacion = Auth::requerirAutenticacion();

        if ($autorizacion !== null) {
            return $autorizacion;
        }

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $controller = new ProductoController($pdo);

        return $controller->admin();
    }

        /*
    |--------------------------------------------------------------------------
    | Listar producto por ID
    |--------------------------------------------------------------------------
    */
    if ($metodo === "GET" && preg_match("#^/api/productos/([0-9]+)$#", $ruta, $coincidencias)) {

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $id = (int) $coincidencias[1];

        $controller = new ProductoController($pdo);

        return $controller->show($id);
    }

        /*
    |--------------------------------------------------------------------------
    | Actualizar producto
    |--------------------------------------------------------------------------
    */

    if ($metodo === "PUT" && preg_match("#^/api/productos/([0-9]+)$#", $ruta, $coincidencias)) {

    require_once __DIR__ . "/../middleware/Auth.php";

        $autorizacion = Auth::requerirAutenticacion();

        if ($autorizacion !== null) {
            return $autorizacion;
        }

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $id = (int) $coincidencias[1];

        $datos = json_decode(
            file_get_contents("php://input"),
            true
        );

        $controller = new ProductoController($pdo);

        return $controller->update($id, $datos ?? []);
    }

        /*
    |--------------------------------------------------------------------------
    | Eliminar producto fisicamente
    |--------------------------------------------------------------------------
    */
  
    if ($metodo === "DELETE" && preg_match("#^/api/productos/([0-9]+)$#", $ruta, $coincidencias)) {

    require_once __DIR__ . "/../middleware/Auth.php";

        $autorizacion = Auth::requerirAutenticacion();

        if ($autorizacion !== null) {
            return $autorizacion;
        }

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $id = (int) $coincidencias[1];

        $controller = new ProductoController($pdo);

        return $controller->destroy($id);
    }

    /*
    |--------------------------------------------------------------------------
    | Restaurar producto
    |--------------------------------------------------------------------------
    */
    if (
        $metodo === "PUT" &&
        preg_match("#^/api/productos/([0-9]+)/restaurar$#", $ruta, $coincidencias)
    ) {

        require_once __DIR__ . "/../config/database.php";
        require_once __DIR__ . "/../controllers/ProductoController.php";

        $id = (int) $coincidencias[1];

        $controller = new ProductoController($pdo);

        return $controller->restore($id);
    }

    /*
    |--------------------------------------------------------------------------
    | Ruta no encontrada
    |--------------------------------------------------------------------------
    */

    return [
        "ok" => false,
        "mensaje" => "Ruta no encontrada"
    ];
}