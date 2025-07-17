import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import About from './pages/About';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <br /><br />
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca</Link>
      </nav>
    </>

  );
}

export default App;
