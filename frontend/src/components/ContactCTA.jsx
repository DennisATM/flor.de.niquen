import { Link } from "react-router-dom"

export const ContactCTA = () => {
  return (
    <section className="bg-green-800 py-20">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-sm font-semibold uppercase tracking-wider text-green-200">
          Estamos para ayudarte
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          ¿Quieres conocer nuestros productos?
        </h2>

        <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
          Ponte en contacto con nosotros y conoce más sobre
          nuestros productos y soluciones.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/contacto"
            className="bg-white text-green-800 px-8 py-3.5 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Contáctanos
          </Link>

          <Link
            to="/productos"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-800 transition"
          >
            Ver productos
          </Link>

        </div>

      </div>

    </section>
  )
}