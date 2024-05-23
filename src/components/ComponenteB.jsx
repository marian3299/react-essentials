
export default function ComponenteB({textBtn, onClick}) {
    
   const miValor = "Datos desde el componente hijo";

  return (
    <button onClick={() => {onClick(miValor)}}>{textBtn}</button>
  )
}
