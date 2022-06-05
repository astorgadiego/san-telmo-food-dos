import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import useCartContext from "../Store/CartContext"

function Itemdetalle({prodseleccionado}) {

  const [estaencarrito, setestaencarrito] = useState(false)
  const { AgregarAlCarrito } = useCartContext()

  function OnAdd( contando ) {
    
    setestaencarrito(true)
    AgregarAlCarrito( prodseleccionado, contando )
    console.log("Agregado al carrito: ", prodseleccionado, contando)
}

  if ( prodseleccionado === undefined ) {
    return <iframe src="https://giphy.com/embed/swhRkVYLJDrCE" width="100%" height="100%"  allowFullScreen></iframe>
  }

  return (
    <>
      <div className="flex flex-col">
              <div>
                  {prodseleccionado.titulo}
              </div>
              <div>   
                  <h2>${prodseleccionado.precio}</h2>
              </div>
              <div className="flex self-center">
                <img width="300" src={prodseleccionado.imagenURL} alt={prodseleccionado.tipo} />
              </div>
              
              { estaencarrito ? 
                  <Link to='/Carrito'>Ir a tu Carrito</Link>
              :
                  <ItemCount agregado={OnAdd} stock={prodseleccionado.stock} initial={1}> </ItemCount>
              }
              
              <div><Link to={`/`}>Volver a Inicio</Link></div>  
      
      </div>    
      
    </>
  )
}
export default Itemdetalle