import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Usuarios from './components/Usuarios'
import CrearUsuario from './components/CrearUsuario'
import CrearHospital from './components/CrearHospital'
import CrearSpecialization from './components/CrearSpecialization'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Listado de usuarios</Link>
        <Link to="/crear-usuario">Agregar usuario</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Usuarios/>}></Route>
        <Route path="/crear-usuario" element={<CrearUsuario/>}></Route>
        <Route path="/crear-hospital" element={<CrearHospital/>}></Route>
        <Route path="/crear-especializacion" element={<CrearSpecialization/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
