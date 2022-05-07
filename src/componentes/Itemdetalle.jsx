import { Link } from "react-router-dom"

function Itemdetalle({prodseleccionado}) {
  return (
    <>
      <div>{prodseleccionado.titulo}</div>
      <div>${prodseleccionado.precio}</div>
      <img src={prodseleccionado.imagenURL} alt={prodseleccionado.tipo} />
      <div><Link to={`/`}>Volver a Inicio</Link></div>  
    </>
  )
}
export default Itemdetalle