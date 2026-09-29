import { useState } from "react"

export const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormulario({
      ...formulario,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Datos del formulario:", formulario)

    setEnviado(true)
  }

  return (
    <div className="bg-white">

      {/* Encabezado */}
      <section className="bg-green-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-200">
            Estamos para ayudarte
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Contáctanos
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-green-100 leading-relaxed">
            ¿Tienes una consulta sobre nuestros productos o servicios?
            Escríbenos y nos pondremos en contacto contigo.
          </p>

        </div>
      </section>

      {/* Contenido */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Información */}
          <div>

            <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Hablemos
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Estamos disponibles para atender tus consultas
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Puedes contactarnos para conocer nuestros productos,
              consultar por nuestros servicios de secado y almacenaje
              o solicitar información sobre transporte de carga.
            </p>

            {/* Datos de contacto */}
            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Ubicación
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Ruta 128, Km 1, Parral, Región del Maule, Chile
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Teléfono
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Información de contacto
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Correo electrónico
                  </h3>

                  <p className="mt-1 text-gray-600">
                    contacto@flordeniquen.cl
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Formulario */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10">

            {enviado ? (

              <div className="min-h-112.5 flex flex-col items-center justify-center text-center">

                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  ¡Mensaje enviado!
                </h2>

                <p className="mt-3 text-gray-600 max-w-md">
                  Tu consulta ha sido registrada en el formulario.
                  En la siguiente etapa conectaremos este formulario
                  con nuestra API para realizar el envío real.
                </p>

                <button
                  onClick={() => setEnviado(false)}
                  className="mt-8 bg-green-700 text-white px-7 py-3 rounded-full font-semibold hover:bg-green-800 transition"
                >
                  Enviar otro mensaje
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                <h2 className="text-2xl font-bold text-gray-900">
                  Envíanos un mensaje
                </h2>

                <p className="mt-2 text-gray-600">
                  Completa el formulario y cuéntanos cómo podemos ayudarte.
                </p>

                {/* Nombre */}
                <div className="mt-7">

                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Nombre
                  </label>

                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />

                </div>

                {/* Email y teléfono */}
                <div className="mt-5 grid sm:grid-cols-2 gap-5">

                  <div>

                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Correo electrónico
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formulario.email}
                      onChange={handleChange}
                      required
                      placeholder="correo@ejemplo.cl"
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="telefono"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Teléfono
                    </label>

                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formulario.telefono}
                      onChange={handleChange}
                      placeholder="+56 9..."
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                </div>

                {/* Asunto */}
                <div className="mt-5">

                  <label
                    htmlFor="asunto"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Motivo de contacto
                  </label>

                  <select
                    id="asunto"
                    name="asunto"
                    value={formulario.asunto}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >

                    <option value="">
                      Selecciona una opción
                    </option>

                    <option value="consulta-general">
                      Consulta general
                    </option>

                    <option value="productos">
                      Consulta sobre productos
                    </option>

                    <option value="secado-arroz">
                      Secado y almacenaje de Arroz Paddy
                    </option>

                    <option value="secado-maiz">
                      Secado y almacenaje de Maíz
                    </option>

                    <option value="transporte">
                      Transporte de carga
                    </option>

                    <option value="otro">
                      Otro
                    </option>

                  </select>

                </div>

                {/* Mensaje */}
                <div className="mt-5">

                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />

                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="mt-6 w-full bg-green-700 text-white py-3.5 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  Enviar mensaje
                </button>

              </form>

            )}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Arrocera Flor de Ñiquén
          </h2>

          <p className="mt-4 text-gray-600">
            Productos, servicios y soluciones para nuestros clientes.
          </p>

        </div>

      </section>

    </div>
  )
}