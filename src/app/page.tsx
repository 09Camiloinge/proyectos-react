'use client';

import {useState} from 'react';
import Boton from '../components/Boton';

export default function Home() {
  const [ mensaje, setMensaje] = useState('');

  //Funcion para maneja el comportamiento del boton
  const manejarClick = (textoBoton: String) => {
    setMensaje(`Has pulsado el boton: ${textoBoton}`);

    //Condicional para mostrar un mensaje alerta

    if (textoBoton === 'Aceptar'){
      console.log('Has pulsado Aceptar');
      alert('!Gracias por aceptar¡');
    } else if (textoBoton === 'Cancelar'){
      console.log('Has pulsado Cancelar');
      alert('!Has cancelado la operacion¡');
    }
  };
  
  return (
    <main style={{textAlign: 'center', padding: '20px'}}>
    <h1>Pagina Principal</h1>
    {mensaje && <p style={{color: 'green', fontSize: '18px'}}>{mensaje}</p>}

      <div> 
        <Boton texto="Aceptar" onClick={manejarClick} />
        <Boton texto="Cancelar" onClick={manejarClick} />
      </div>
    </main>


  );

}


//import { useState } from "react";
//import Saludo from './components/first';

//export default function Home() {
  //const [contador, setContador] = useState(0);

  // Variables para el contador
  //const incrementar = () => setContador(contador + 1);
  //const decrementar = () => setContador(contador - 1);
  //const resetear = () => setContador(0);

  //return (
    //<main style={{textAlign: 'center', padding: '50px'}}>
      //<h1>Contador Dinamico </h1>
      //<h2>{contador}</h2>

      {/* Botones */}
      //<button onClick={incrementar}>Aumentar</button>{' '}
      //<button onClick={decrementar}>Disminuir</button>{''}
      //<button onClick={resetear}>Resetear</button>
   // </main>

  //);
//}