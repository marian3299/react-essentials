import './App.css';
import GestionInterfazUsuario from './temas/GestionInterfazUsuario';
import Componentes from './temas/Componentes';
import EventosYFormularios from './temas/EventosYFormularios';
import GestioEstadoYCargaDatos from './temas/GestionEstadoYCargaDatos';
import ListasYEstructurasDeDatos from './temas/ListasYEstructurasDeDatos';
import Home from './enrutamiento/Home';
import About from './enrutamiento/About';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Producto from './enrutamiento/Producto';

function App() {
  return (
   <BrowserRouter>

      {/* Bloque estatico */}
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink to='/home' className='nav-link'>Home</NavLink></li>
          <li className="nav-item"><NavLink to='/about' className='nav-link'>About</NavLink></li>
        </ul>
      </nav>

      {/* Bloque dinamico */}
      <div className='container'>
        <Routes>
            <Route path='/' element={<GestionInterfazUsuario />} />
            <Route path='/componentes' element={<Componentes />} />
            <Route path='/form' element={<EventosYFormularios />} />
            <Route path='/cargaDatos' element={<GestioEstadoYCargaDatos />} />
            <Route path='/listas' element={<ListasYEstructurasDeDatos />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/producto/:nombreParam' element={<Producto />} />
        </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
