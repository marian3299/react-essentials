import { Link } from "react-router-dom";
import Contents from "./Contents";

export default function Home() {
  const productos = [
    { id: 1, nombre: "Smartphone" },
    { id: 2, nombre: "Laptop" },
    { id: 3, nombre: "Tablet" },
    { id: 4, nombre: "Aripods" },
    { id: 5, nombre: "SmartTv" },
    { id: 6, nombre: "Bocina" },
  ];

  return (
    <>
      <h1>Home</h1>
      <Contents />

      <h2>Productos</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <Link to={`/producto/${producto.nombre}`} key={producto.id} className="list-group-item list-group-item-action">
            {producto.nombre}
          </Link>
        ))}
      </ul>
    </>
  );
}
