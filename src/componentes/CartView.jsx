import React from "react"
import useCartContext  from "../Store/CartContext"
import { Link } from "react-router-dom";


function CartView() {
  let total_parcial=0;
  const  { carrito, removeFromCart, ClearCarrito, TotalCompra }  = useCartContext ();
  console.log(" CART: ", carrito);
  if( carrito.length === 0){
    return <div>
      <h4>No hay Items en Carrito</h4>
      <Link to='/' >Volver al catalogo</Link>
    </div>
  }
  else{
    return <div> 
            {carrito.map( Cartitem=> {
                        total_parcial = total_parcial + (Cartitem.cant * Cartitem.precio)
                        return <div key={Cartitem.id}>
                          <h2> {Cartitem.tipo} </h2>
                          <h2> {Cartitem.titulo} : {Cartitem.cant} </h2>
                          <h2> Total: $ {Cartitem.cant * Cartitem.precio} </h2>
                          <button onClick={()=>removeFromCart(Cartitem.id)} >Eliminar Item del Carrito</button>
                          <hr/>
                        </div>
            } )}
            <div><button onClick={ClearCarrito} >Vaciar el Carrito </button></div>
            {/*ACA VA UN BOTON QUE VAYA A LA FUNCION DE CALCULAR EL PRECIO TOTAL*/}
            <div><h2> El valor de su compra es : $  {TotalCompra(total_parcial)} </h2></div>
    </div>
  }
  
}


export default CartView