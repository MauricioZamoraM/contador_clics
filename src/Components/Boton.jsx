import React from 'react';
import '../Stylesheets/Boton.css'

function Boton({ texto, esBotonClic,manejarClic }) {
    return (
       /* Si la exprecion es verdadera retorna el primer valor y si es falsa retorna el segundo valor que indicamos */
       /* El evento onClick indica la función que se va a realizar al hacer clic */
        <button className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>{texto}</button>
    );
}

export default Boton;