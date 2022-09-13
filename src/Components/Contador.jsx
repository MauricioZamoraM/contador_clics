import React from "react";
import '../Stylesheets/Contador.css'
function Contador({ numClics }) {
    return (
     
            <div className='contador'>
                {numClics}
            </div>


    );
}
export default Contador;