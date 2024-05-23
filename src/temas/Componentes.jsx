import { useCallback, useState } from 'react';
import ComponenteA from '../components/ComponenteA';
import ComponenteB from '../components/ComponenteB';

export default function Componentes() {

    const miEmoji = ":D";
    const miBtn = "Buscar destino"
  
    const [mensaje, setMensaje] = useState("Viajes Aventura");
  
    const manejarClick = () => {
      setMensaje("Listo para viajar");
    }

    const callback = useCallback(

        (datos) => {
          setMensaje(datos)
        }, [mensaje]
    
      )

  return (
    <>
    <ComponenteA
        emoji={miEmoji}
        titulo={mensaje}
      />

      <ComponenteB
        textBtn={miBtn}
        onClick={manejarClick}
      />

      <ComponenteB
        textBtn="Callback"
        onClick={callback}
      />
    
    </>
  )
}
