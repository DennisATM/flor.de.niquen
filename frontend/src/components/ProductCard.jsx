import {Link} from "react-router-dom"

export const ProductCard = ({ producto }) => {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

      {/* IMAGEN */}

      <div className="relative overflow-hidden bg-gray-100">

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-64 object-contain group-hover:scale-105 transition duration-500"
        />

      </div>


      {/* INFORMACIÓN */}

      <div className="p-6">

        <span className="text-sm font-semibold text-green-700">
          {producto.categoria}
        </span>

        <h3 className="mt-2 text-xl font-bold text-gray-900">
          {producto.nombre}
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          {producto.descripcion}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-sm text-gray-500">
            {producto.formato}
          </span>

          <Link to={`/productos/${producto.id}`} className="text-green-700 font-semibold hover:text-green-900 transition">
            Ver producto →
          </Link>

        </div>

      </div>

    </article>
  )
}