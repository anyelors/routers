import { useParams } from 'react-router-dom';

function Imagenes() {
    const { id } = useParams();

    return (<div>
        <h2>Estás viendo la imagen #{id} 📰</h2>
        <a href="/galeria">Volver a galeria</a>&emsp;
        <a href="/">Volver a inicio</a>
    </div>
    );
}

export default Imagenes;
