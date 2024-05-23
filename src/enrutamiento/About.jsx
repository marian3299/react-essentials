import { useNavigate } from "react-router-dom";
import Contents from "./Contents";

export default function About() {
  const navegar = useNavigate();

  const manejarNavegacion = () => {
    navegar('/home');
  }

  return (
    <>
        <h1>About</h1>
        <Contents />
        <Contents />
        <Contents />
        <Contents />

        <button onClick={manejarNavegacion}>
          Ir a Home
        </button>
    </>
  )
}
