import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

import {
  obtenerUsuarioSesion,
  verificarSesion,
  cerrarSesion
} from "../services/authService"

export const RutaProtegida = ({ children }) => {
  const [cargando, setCargando] = useState(true)
  const [autenticado, setAutenticado] = useState(false)

  useEffect(() => {
    async function comprobarSesion() {
      const usuarioLocal = obtenerUsuarioSesion()

      if (!usuarioLocal) {
        setAutenticado(false)
        setCargando(false)
        return
      }

      try {
        const usuarioServidor = await verificarSesion()

        if (!usuarioServidor) {
          cerrarSesion()
          setAutenticado(false)
          return
        }

        setAutenticado(true)
      } catch (error) {
        console.error("Error al verificar sesión:", error)

        cerrarSesion()
        setAutenticado(false)
      } finally {
        setCargando(false)
      }
    }

    comprobarSesion()
  }, [])

  if (cargando) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-gray-500">
          Verificando sesión...
        </p>
      </div>
    )
  }

  if (!autenticado) {
    return <Navigate to="/login" replace />
  }

  return children
}