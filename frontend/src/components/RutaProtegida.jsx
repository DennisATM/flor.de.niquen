import { Navigate } from "react-router-dom"

import { obtenerUsuarioSesion } from "../services/authService"

export const RutaProtegida = ({ children }) => {
  const usuario = obtenerUsuarioSesion()

  if (!usuario) {
    return <Navigate to="/login" replace />
  }

  return children
}