import ProductoItem from "../components/ProductoItem"

export default function ListasYEstructurasDeDatos() {

    const productos = [
        {id: 1, nombre: 'Camiseta', precio: 20},
        {id: 2, nombre: 'Pantalon', precio: 50},
        {id: 3, nombre: 'Zapatos', precio: 70},
        {id: 4, nombre: 'Calcetines', precio: 10},
    ]

  return (
    <>
        <h2>Catalogo de productos</h2>

        {productos.length === 0 ? (
            <p>No hay prdocutos disponibles</p>
        ) : (
            <div className="productos">
            {productos.map(
                (producto) =>(
                    <ProductoItem key={producto.id} producto={producto} />
                )
            )}
        </div>
        )};

        
    </>
    
  )
}
