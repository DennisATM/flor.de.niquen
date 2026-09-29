import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Nosotros } from './pages/Nosotros';
import { Productos } from './pages/Productos';
import { Servicios } from './pages/Servicios';
import { Contacto } from './pages/Contacto';
import { Proceso } from './pages/Proceso';
import { ProductoDetalle } from './pages/ProductoDetalle';
import { AdminProductos } from './pages/AdminProductos';

import {Navbar} from './components/Navbar';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar />
      <main className="min-h-[calc(100vh-20rem)] pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/admin/productos" element={<AdminProductos />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>

    </>
  )
}

export default App
