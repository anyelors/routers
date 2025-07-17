import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Inicio
      </NavLink>
      {'⚕️'}
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
}

export default Navbar;
