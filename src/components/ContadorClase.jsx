import { useState } from "react";

const ContadorClase = () => {
    
    const  [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1);
    }

    const reducir = () => {
        setConteo((prevConteo) => prevConteo - 1);
    }

    return(
        <div>
                <h1>Contador de clicks</h1>
                <p>conteo: {conteo}</p>
                <button onClick={incrementar}>Sumar</button>
                <button onClick={reducir}>Restar</button>
            </div>
    );
}

export default ContadorClase;