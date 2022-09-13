
import './App.css';
import logo from './Icons/cursor-default-click.png';
import Boton from './Components/Boton.jsx';
import Contador from './Components/Contador';

/*importamos los estados de react */
import { useState } from 'react';
function App() {
  /* Declaramos un array llamado numClics que recibe una funcion setNumClics y el estado inicial es 0 */
  const [numClics, setNumClics] = useState(0);

  const manejoClic = () => {
    setNumClics(numClics + 1);

  }
  const reinicioContador = () => {
    setNumClics(0);
  }

  return (
  
    <div className="ContenedorApp">
      
     <div className='contenedor-head'>

     <h1>Contador de click</h1>
        <img className='logo' src={logo} alt='logo' />
     
     </div>
     
      <Contador
        numClics={numClics}
      />

      <div className='contenedorboton1'>
        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejoClic}
        />
      </div>

      <div className='contenedorboton2'>
        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reinicioContador}
        />

      </div>
      
    </div>
  );
}

export default App;
