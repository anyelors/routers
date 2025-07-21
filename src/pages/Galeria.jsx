import { Link } from 'react-router-dom';

function Galeria() {
  return (
    <>
      <h1>Galeria</h1>
      <ul>
        <li><Link to="/foto/1">Imagen 1</Link></li>
        <li><Link to="/foto/2">Imagen 2</Link></li>
      </ul>
    </>
  );
}
export default Galeria;
