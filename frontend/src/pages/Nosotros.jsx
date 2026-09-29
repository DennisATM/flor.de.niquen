export const Nosotros = () => {
  return (
    <div className="bg-white">

      {/* =====================================================
          HERO NOSOTROS
      ====================================================== */}

      <section className="relative overflow-hidden bg-green-950">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-125">

          {/* -------------------------------------------------
              TEXTO
          -------------------------------------------------- */}

          <div className="relative z-10 flex items-center px-6 py-20 md:px-12 lg:px-16">

            <div className="max-w-xl">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
                Nuestra historia
              </span>

              <h1 className="mt-5 text-5xl md:text-6xl font-bold text-white leading-tight">
                Quiénes somos
              </h1>

              <p className="mt-6 text-lg text-green-100 leading-relaxed">
                Conoce más sobre Arrocera Flor de Ñiquén,
                nuestra historia, nuestro trabajo y nuestro
                compromiso.
              </p>

            </div>

          </div>


          {/* -------------------------------------------------
              IMAGEN CON CORTE OVALADO
          -------------------------------------------------- */}

          <div className="relative min-h-100 lg:min-h-full">

            <img
              src="/planta.png"
              alt="Planta de Arrocera Flor de Ñiquén"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                lg:[clip-path:ellipse(85%_75%_at_85%_50%)]
              "
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          QUIÉNES SOMOS
      ====================================================== */}

      <section className="py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Texto */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Nuestra identidad
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                Tradición y dedicación en cada grano
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                En Arrocera Flor de Ñiquén trabajamos cada día
                para entregar productos de calidad, poniendo
                dedicación y experiencia en cada etapa de nuestro
                proceso.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Nuestra actividad está ligada a la tradición
                arrocera de nuestra zona y al compromiso de
                entregar productos que respondan a las necesidades
                de nuestros clientes.
              </p>

            </div>


            {/* Características */}

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-green-50 rounded-2xl p-7">

                <div className="text-4xl">
                  🌾
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Arroz nacional
                </h3>

                <p className="mt-2 text-gray-600">
                  Productos vinculados a nuestra tradición
                  agrícola.
                </p>

              </div>


              <div className="bg-green-50 rounded-2xl p-7">

                <div className="text-4xl">
                  ⭐
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Calidad
                </h3>

                <p className="mt-2 text-gray-600">
                  Dedicación en las distintas etapas de nuestro
                  trabajo.
                </p>

              </div>


              <div className="bg-green-50 rounded-2xl p-7">

                <div className="text-4xl">
                  🏭
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Infraestructura
                </h3>

                <p className="mt-2 text-gray-600">
                  Instalaciones para el procesamiento y
                  almacenamiento.
                </p>

              </div>


              <div className="bg-green-50 rounded-2xl p-7">

                <div className="text-4xl">
                  🤝
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Compromiso
                </h3>

                <p className="mt-2 text-gray-600">
                  Orientados a las necesidades de nuestros
                  clientes.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUESTRA PLANTA
      ====================================================== */}

      <section className="bg-gray-50 py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Nuestra planta
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Infraestructura para nuestra operación
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Conoce parte de nuestras instalaciones y de la
              infraestructura que forma parte de nuestras
              operaciones.
            </p>

          </div>


          {/* Fotografía */}

          <div className="relative mt-12">

            <div className="absolute -inset-4 bg-green-100 rounded-[3rem] -z-10" />

            <img
              src="/planta.png"
              alt="Instalaciones de Arrocera Flor de Ñiquén"
              className="w-full h-100 md:h-137.5 object-cover rounded-[2.5rem] shadow-xl"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CIERRE
      ====================================================== */}

      <section className="bg-green-800 py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-200">
            Arrocera Flor de Ñiquén
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Calidad, tradición y compromiso
          </h2>

          <p className="mt-5 text-lg text-green-100 leading-relaxed">
            Seguimos trabajando para entregar productos y
            servicios que respondan a las necesidades de
            nuestros clientes.
          </p>

        </div>

      </section>

    </div>
  )
}