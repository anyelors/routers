import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Gracias from './pages/Gracias';
import Galeria from './pages/Galeria';
import Imagenes from './pages/Imagenes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/producto" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/foto/:id" element={<Imagenes />} />
      </Routes>
      <br /><br />
    </BrowserRouter>

  );
}

export default App;
