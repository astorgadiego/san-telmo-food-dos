import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import useCartContext from "../Store/CartContext"

function Itemdetalle({prodseleccionado}) {

  const [estaencarrito, setestaencarrito] = useState(false)
  const { AgregarAlCarrito } = useCartContext()

  function OnAdd( contando ) {
    console.log(`Agregaste Al Carrito ${contando} Productos.`)
    setestaencarrito(true)
    AgregarAlCarrito( prodseleccionado, contando )
    console.log("Agregado al carrito: ", prodseleccionado, contando)
}

  if ( prodseleccionado === undefined ) {
    return <iframe src="https://giphy.com/embed/swhRkVYLJDrCE" width="100%" height="100%"  allowFullScreen></iframe>
  }

  return (
    <>
      <div>{prodseleccionado.titulo}</div>
      <div><h2>${prodseleccionado.precio}</h2></div>
      <img src={prodseleccionado.imagenURL} alt={prodseleccionado.tipo} />
      { estaencarrito ? 
          <Link to='/Carrito'>Ir a tu Carrito</Link>
      :
          <ItemCount agregado={OnAdd} stock={prodseleccionado.stock} initial={1}> </ItemCount>
      }
      
      <div><Link to={`/`}>Volver a Inicio</Link></div>  
    </>
  )
}
export default Itemdetalle