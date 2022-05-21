import React from "react"
import useCartContext  from "../Store/CartContext"
import { Link } from "react-router-dom";


function CartView() {

  const  { carrito, removeFromCart, ClearCarrito }  = useCartContext ();
  console.log(" CART: ", carrito);
  if( carrito.length === 0){
    return <div>
      <h4>No hay Items en Carrito</h4>
      <Link to='/' >Volver al catalogo</Link>
    </div>
  }
  else{
    return <div> 
      {carrito.map( Cartitem=>{
      return <div>
        <h2> {Cartitem.tipo} </h2>
        <h2> {Cartitem.titulo} : {Cartitem.cant} </h2>
        <h2> $ {Cartitem.cant * Cartitem.precio} </h2>
        <button onClick={()=>removeFromCart(Cartitem.id)} >Eliminar Item del Carrito</button>
        <hr/>
      </div>
    } )}
    <button onClick={ClearCarrito} >Vaciar el Carrito </button>
    {/*ACA VA UN BOTON QUE VAYA A LA FUNCION DE CALCULAR EL PRECIO TOTAL*/}
    </div>
  }
  
}


export default CartView