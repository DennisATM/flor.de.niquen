export const PlantaPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Contenido */}
          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Nuestra planta
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Infraestructura que nos permite crecer
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Nuestra planta reúne las instalaciones necesarias para
              desarrollar nuestras operaciones de recepción, procesamiento
              y almacenamiento de productos agrícolas.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Contamos con áreas de proceso, almacenamiento y despacho
              que forman parte de nuestra operación diaria.
            </p>

            {/* Características */}
            <div className="mt-8 grid sm:grid-cols-3 gap-5">

              <div className="flex flex-col items-center sm:items-start">

                <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl">
                  🏢
                </div>

                <h3 className="mt-3 font-bold text-gray-900">
                  Galpones
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Áreas de proceso
                </p>

              </div>

              <div className="flex flex-col items-center sm:items-start">

                <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl">
                  🌾
                </div>

                <h3 className="mt-3 font-bold text-gray-900">
                  Almacenamiento
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Silos y bodegas
                </p>

              </div>

              <div className="flex flex-col items-center sm:items-start">

                <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl">
                  🚛
                </div>

                <h3 className="mt-3 font-bold text-gray-900">
                  Despacho
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Carga y transporte
                </p>

              </div>

            </div>

          </div>

          {/* Fotografía */}
          <div className="relative">

            <div className="absolute -inset-4 bg-green-100 rounded-4xl -z-10" />

            <img
              src="/planta.png"
              alt="Instalaciones de Arrocera Flor de Ñiquén"
              className="w-full h-105 md:h-125 object-cover rounded-4xl shadow-xl"
            />

          </div>

        </div>

      </div>

    </section>
  )
}