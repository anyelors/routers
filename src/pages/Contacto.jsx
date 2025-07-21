import { useNavigate } from 'react-router-dom';

function Contacto() {
  const navigate = useNavigate();

  const enviarFormulario = () => {
    alert('Formulario enviado');
    navigate('/gracias');
  };

  return (
    <div>
      <h1>Contacto 📬</h1>
      <button onClick={enviarFormulario}>Enviar</button>
    </div>
  );
}

export default Contacto;
