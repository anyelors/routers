import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
      {'⚕️'}
      <NavLink to="/producto" className="nav-link" activeClassName="active">Productos</NavLink>
      {'⚕️'}
      <NavLink to="/contacto" className="nav-link" activeClassName="active">Contacto</NavLink>
      {'⚕️'}
      <NavLink to="/galeria" className="nav-link" activeClassName="active">Galeria</NavLink>
    </nav>
  );
}

export default Navbar;
