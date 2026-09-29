import {Link} from "react-router-dom"

export const ProcessPreview = () => {

  const etapas = [
    {
      numero: "01",
      icono: "🌾",
      titulo: "Recepción",
      descripcion:
        "Recibimos el arroz y realizamos los controles necesarios antes de iniciar el proceso."
    },
    {
      numero: "02",
      icono: "🏭",
      titulo: "Secado",
      descripcion:
        "El arroz pasa por un proceso de secado que permite alcanzar las condiciones adecuadas para su elaboración."
    },
    {
      numero: "03",
      icono: "⚙️",
      titulo: "Elaboración",
      descripcion:
        "Nuestro proceso permite preparar el arroz manteniendo los estándares de calidad definidos."
    },
    {
      numero: "04",
      icono: "🔎",
      titulo: "Control de calidad",
      descripcion:
        "Realizamos controles durante las distintas etapas para asegurar las características del producto."
    },
    {
      numero: "05",
      icono: "📦",
      titulo: "Envasado",
      descripcion:
        "Finalmente, el producto es envasado y preparado para llegar a nuestros clientes."
    }
  ]

  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Nuestro proceso
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Del campo a nuestra mesa
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Cada etapa es parte de nuestro compromiso con la calidad
            y con entregar un producto que llegue a nuestros clientes
            en las mejores condiciones.
          </p>

        </div>


        {/* ETAPAS */}

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {etapas.map((etapa) => (

            <div
              key={etapa.numero}
              className="relative text-center group"
            >

              {/* NÚMERO */}

              <div className="text-sm font-bold text-green-700 mb-4">
                {etapa.numero}
              </div>


              {/* ICONO */}

              <div className="mx-auto w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-4xl group-hover:bg-green-100 group-hover:scale-110 transition duration-300">
                {etapa.icono}
              </div>


              {/* TÍTULO */}

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {etapa.titulo}
              </h3>


              {/* DESCRIPCIÓN */}

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {etapa.descripcion}
              </p>

            </div>

          ))}

        </div>


        {/* BOTÓN */}

        <div className="mt-12 text-center">

          <Link
            to="/proceso"
            className="inline-block border-2 border-green-700 text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition"
          >
            Conoce nuestro proceso
          </Link>                
          
        </div>

      </div>

    </section>
  )
}
