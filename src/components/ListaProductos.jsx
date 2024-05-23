import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function ListaProductos() {
  //Importar datos de DataContext
  const { data, setData } = useContext(DataContext);

  const manejarClick = (e) => {
    const id = e.id;
    setData( prevData => prevData.map(item => item.id === id ? { ...item, status: 'selected'} : item));
  };

  console.log(data);  

  return (
    <div className="product-container">
      <h2>Productos</h2>
      <div className="product-card-container">
        {data.map((producto) => (
          <div key={producto.id} className="product-card">
            <h5>{producto.nombre}</h5>
            <p>${producto.precio}</p>
            <button
              className="product-button"
              onClick={() => manejarClick(producto)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
