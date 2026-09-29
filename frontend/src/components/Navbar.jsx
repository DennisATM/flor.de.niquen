import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">

      <nav className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >

            <span className="text-green-700 text-3xl font-bold flex items-center gap-2">
              <img src="/logo.jpg" alt="Flor de Ñiquén" className="h-10 w-10 rounded-full" />
            </span>

            <div>
              <h1 className="text-xl font-bold text-green-800">
                Flor de Ñiquén
              </h1>

              <p className="text-xs text-gray-500">
                Arrocera
              </p>
            </div>

          </Link>


          {/* MENU DESKTOP */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Inicio
            </Link>

            <Link
              to="/nosotros"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Nosotros
            </Link>

            <Link
              to="/productos"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Productos
            </Link>

            <Link
              to="/servicios"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Servicios
            </Link>

            <Link
              to="/proceso"
              className="text-gray-700 hover:text-green-700 transition"
            >
              Nuestro proceso
            </Link>

            <Link
              to="/contacto"
              className="bg-green-700 text-white px-5 py-2.5 rounded-full hover:bg-green-800 transition"
            >
              Contacto
            </Link>

          </div>


          {/* BOTÓN MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-gray-700"
            aria-label="Abrir menú"
          >
            ☰
          </button>

        </div>


        {/* MENU MOBILE */}

        {menuOpen && (

          <div className="md:hidden pb-6">

            <div className="flex flex-col gap-4 pt-4 border-t">

              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-green-700"
              >
                Inicio
              </Link>

              <Link
                to="/nosotros"
                onClick={closeMenu}
                className="text-gray-700 hover:text-green-700"
              >
                Nosotros
              </Link>

              <Link
                to="/productos"
                onClick={closeMenu}
                className="text-gray-700 hover:text-green-700"
              >
                Productos
              </Link>

              <Link
                to="/servicios"
                onClick={closeMenu}
                className="text-gray-700 hover:text-green-700"
              >
                Servicios
              </Link>

              <Link
                to="/proceso"
                onClick={closeMenu}
                className="text-gray-700 hover:text-green-700"
              >
                Nuestro proceso
              </Link>

              <Link
                to="/contacto"
                onClick={closeMenu}
                className="text-gray-700 hover:text-green-700"
              >
                Contacto
              </Link>

            </div>

          </div>

        )}

      </nav>

    </header>
  )
} 