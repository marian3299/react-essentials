import { useParams } from "react-router-dom";
import Contents from "./Contents";

export default function Producto() {
  const params = useParams();

  return (
    <>
      <h1>{params.nombreParam}</h1>
      <Contents />
    </>
  );
}
