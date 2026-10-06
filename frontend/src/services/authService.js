const API_URL = "http://localhost:8000"

export const iniciarSesion = async (email, password) => {
  const respuesta = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  if (!respuesta.ok) {
    throw new Error("Error al comunicarse con el servidor")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje || "No fue posible iniciar sesión")
  }

  sessionStorage.setItem(
    "adminUsuario",
    JSON.stringify(datos.usuario)
  )

  return datos.usuario
}

export const verificarSesion = async () => {
  const respuesta = await fetch(
    `${API_URL}/api/auth/usuario`,
    {
      credentials: "include"
    }
  )

  if (!respuesta.ok) {
    return null
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    return null
  }

  return datos.usuario
}

export const obtenerUsuarioSesion = () => {
  const usuario = sessionStorage.getItem("adminUsuario")

  if (!usuario) {
    return null
  }

  try {
    return JSON.parse(usuario)
  } catch (error) {
    console.error("Error al leer la sesión:", error)
    return null
  }
}

export const cerrarSesion = () => {
  sessionStorage.removeItem("adminUsuario")
}