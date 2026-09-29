import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-linear-to-br from-green-950 via-green-900 to-green-800">

      {/* =====================================================
          IMAGEN DE FONDO
      ====================================================== */}

      <div className="absolute inset-0">

        <img
          src="/planta.png"
          alt="Arroz Flor de Ñiquén"
          className="w-full h-full object-cover"
        />

        {/* Oscurecimiento general */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Degradado principal */}
        <div className="absolute inset-0 bg-linear-to-r from-green-950 via-green-950/90 via-35% to-transparent" />

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/30 to-transparent" />

      </div>


      {/* =====================================================
          CONTENIDO
      ====================================================== */}

      <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 py-20">

          <div className="max-w-2xl">

            {/* Etiqueta */}

            <span className="inline-block text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-green-200">
              Arroz nacional de calidad
            </span>


            {/* Título */}

            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
              Calidad que nace
              <span className="block text-green-200">
                de nuestra tierra.
              </span>
            </h1>


            {/* Descripción */}

            <p className="mt-7 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Tradición, experiencia y dedicación en cada grano
              de arroz que llega a nuestros clientes.
            </p>


            {/* Botones */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/productos"
                className="bg-white text-green-900 px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-green-50 hover:scale-105 transition duration-300"
              >
                Conocer productos
              </Link>

              <Link
                to="/nosotros"
                className="border-2 border-white/80 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition duration-300"
              >
                Conócenos
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          INDICADOR INFERIOR
      ====================================================== */}

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20">

        <div className="flex flex-col items-center text-white/70">

          <span className="text-xs uppercase tracking-widest">
            Descubre más
          </span>

          <span className="mt-2 text-xl animate-bounce">
            ↓
          </span>

        </div>

      </div>

    </section>
  )
}