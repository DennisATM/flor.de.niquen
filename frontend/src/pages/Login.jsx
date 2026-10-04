import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { iniciarSesion } from "../services/authService"

export const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [cargando, setCargando] = useState(false)

  const manejarLogin = async (e) => {
    e.preventDefault()

    setError("")
    setCargando(true)

    try {
      const usuario = await iniciarSesion(email, password)

      console.log("Usuario autenticado:", usuario)

      navigate("/admin/productos")
    } catch (error) {
      console.error(error)
      setError(error.message)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-100 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

          <div className="text-center">

            <div className="mx-auto w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
              {/* <span className="text-2xl text-white font-bold">
                FN
              </span> */}
              <img src="/logo.jpg" alt="Flor de Ñiquén" className="h-16 w-25 rounded-b-3xl" />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900">
              Acceso administrativo
            </h1>

            <p className="mt-3 text-gray-500">
              Arrocera Flor de Ñiquén
            </p>

          </div>

          <form
            onSubmit={manejarLogin}
            className="mt-8 space-y-5"
          >

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@flor.niquen.cl"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Contraseña
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={cargando}
              className="w-full bg-green-800 text-white py-3.5 rounded-xl font-semibold hover:bg-green-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {cargando ? "Ingresando..." : "Iniciar sesión"}
            </button>

          </form>

        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Panel administrativo · Arrocera Flor de Ñiquén
        </p>

      </div>

    </div>
  )
}