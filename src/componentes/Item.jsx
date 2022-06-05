import { Link } from "react-router-dom"

function Item({art}) {
   return (
    <div key={art.id} className="bg-yellow-400 flex flex-col " style={{border:'solid rgb(68 64 60) 5px', margin:'10px', padding:'5px'}}>
          <div>{art.titulo}</div>
          <div>${art.precio}</div>
          <div className="flex self-center">
          
            <img  width="300" src={art.imagenURL} alt={art.tipo}></img>
            
          </div>
          
          <Link to={`/semilla/${art.id}`}> Detalle</Link>
    </div>
  )
}
export default Item