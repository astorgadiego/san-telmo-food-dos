import React, { useState } from "react"
import useCartContext, { CartContextProvider }  from "../Store/CartContext"
import { CreateOrdendeCompra } from "../DataBase";
import { Link } from "react-router-dom";


function CartView() {
  let total_parcial=0;
  const  { carrito, removeFromCart, ClearCarrito, TotalCompra }  = useCartContext ();
  
  function HandleBuy () {
            const itemsToBuy = carrito.map( (item)=> ({
                            titulo: item.titulo,
                            cant: item.cant,
                            precio: item.precio, 
                            id: item.id,
                        }) 
            )
            const OrdendeCompra = {
                                    buyer: {
                                                name: "Diego",
                                                phone: "21231541",
                                                email: "diego@coder.com"  
                                            }, 
                                    items: itemsToBuy, 
                                    //date: new Date(), 
                                    total: TotalCompra ( total_parcial ) 
            }
            CreateOrdendeCompra( OrdendeCompra )
            
            ClearCarrito()
            
  }
  
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
            
            <div><h2> El valor de su compra es : $  {TotalCompra( total_parcial )} </h2></div>
            <hr />
            <hr />
            <button onClick={ HandleBuy} > ¡Comprar! </button>
            
    </div>
  }
  
}


export default CartView