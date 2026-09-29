import { Link } from 'react-router-dom'

export const Footer = () => {
  const links = [
    { name: 'Inicio', to: '/' },
    { name: 'Nosotros', to: '/nosotros' },
    { name: 'Productos', to: '/productos' },
    { name: 'Servicios', to: '/servicios' },
    { name: 'Proceso', to: '/proceso' },
    { name: 'Contacto', to: '/contacto' }
  ]

  return (
    <footer className="bg-[#102d1d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Flor de Ñiquén"
                className="h-12 w-12 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="text-lg font-bold text-white">Flor de Ñiquén</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-emerald-200/90">
                  Arrocera
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-emerald-50/80">
              Productores de arroz con tradición, cuidado en cada proceso y
              compromiso con la calidad que se reconoce en cada grano.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-emerald-50/80">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Nuestra diferencia
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-emerald-50/80">
              <li>Calidad constante</li>
              <li>Tradición regional</li>
              <li>Atención personalizada</li>
              <li>Proceso responsable</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Contacto
            </h3>
            <p className="mt-5 text-sm leading-6 text-emerald-50/80">
              Estamos listos para ayudarte con información, asesoría y pedidos.
            </p>
            <Link
              to="/contacto"
              className="mt-5 inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-sm text-emerald-100/75 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Arrocera Flor de Ñiquén.</p>
          <p>Calidad y tradición en cada grano de arroz.</p>
        </div>
      </div>
    </footer>
  )
}