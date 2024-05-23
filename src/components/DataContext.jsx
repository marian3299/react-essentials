import { createContext, useState, useEffect } from "react";

//Aqui vamos a guardar toda la info de la app
export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);

    //Llamar a los datos. Solo se va a ejecutar al momento de cargar el componente
    useEffect(() => {
      fetch("./productos.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.error("Error fetching data; ", err));
    }, []);
    return(
        //Cada componente que se encuentre dentro de estas etiquetas recibira informacion del contexto
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}