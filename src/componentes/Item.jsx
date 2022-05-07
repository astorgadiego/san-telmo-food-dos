import { Link } from "react-router-dom"
import Datos from "./Datos"

function Item({art}) {
   return (
    <div key={art.id} className="bg-yellow-400 " style={{border:'solid rgb(68 64 60) 5px', margin:'10px', padding:'5px'}}>
          <div>{art.titulo}</div>
          <div>${art.precio}</div>
          <img src={art.imagenURL} alt={art.tipo}></img>
          <Link to={`/semilla/${art.id}`}> Detalle</Link>
    </div>
  )
}
export default Item