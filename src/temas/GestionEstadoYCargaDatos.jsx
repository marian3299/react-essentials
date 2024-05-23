import ListaProductos from "../components/ListaProductos";
import ListaCarrito from "../components/ListaCarrito";
import { DataProvider } from "../components/DataContext";

export default function GestionEstadoYCargaDatos() {


  return (
    <>
      <div className="row">
        <DataProvider>
          <ListaProductos  />
          <ListaCarrito  />
        </DataProvider>
      </div>
    </>
  );
}
