import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function ListaCarrito() {
  //Importar datos de DataContext
  const { data, setData } = useContext(DataContext);

  const removerItem = (e) => {
    const id = e.id;
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, status: "un-selected " } : item
      )
    );
  };

  const filteredItems = data.filter( item => item.status === 'selected');

  return (
    <div className="cart-container product-container">
      <h2>Shopping Cart</h2>
      <div className="cart-card-container">
        {filteredItems.map((producto) => (
          <div key={producto.id} className="product-card">
            <h5>{producto.nombre}</h5>
            <p>${producto.precio}</p>
            <button
              className="cart-button"
              onClick={() => {
                removerItem(producto);
              }}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
