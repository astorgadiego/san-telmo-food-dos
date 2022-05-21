import { createContext, useState } from "react";
import { useContext } from 'react';


const CartContext= createContext();
const useCartContext= ()=> useContext(CartContext)
const { Provider } = CartContext


export function CartContextProvider({children}) {
    const [carrito, setcarrito] = useState([])

        const AgregarAlCarrito = ( item, cant)=>{
                /*const newCarrito= [...carrito];
                setcarrito( newCarrito. concat (newItem))*/
                if ( isInCarrito( item.id )){  
                    const newCart =  carrito.map(itemdecarrito =>{ if(itemdecarrito.id === item.id){
                        const copyItem = {...itemdecarrito}
                        copyItem.cant += cant
                        return copyItem
                    }
                        else
                            return itemdecarrito
                    } ) 
                    setcarrito(newCart)
                }
                else{
                    const newItem = { ...item, cant}
                    setcarrito( [...carrito, newItem] )
                }
        }

        const removeFromCart = (id)=>{
                const newCarrito = [ ...carrito]
                const filtrarcarrito = newCarrito.filter( item =>{
                    return item.id !== id
                })
                setcarrito(filtrarcarrito)
        }
        
        
        //POR AHORA ESTA EN MODO MANUAL. 
        const isInCarrito = ( id )=>{
            return carrito.some( CartItem => CartItem.id === id)    
        }
        
        
        const getItemfromCarrito = ( id )=>{
            return carrito.find( CartItem => CartItem.id === id)
        }
        
        const ClearCarrito =()=>{
            setcarrito([])
        }

    
        
 
        const Funcioncontexto = ()=>console.log("Contexto Listo!!")    

        //NAVBAR
        const CantidadenCarrito = (  )=>{
            const cantidad = 0
            //foreach del cart e ir sumando al "can", la cantidad de este item
            //  carrito.foreach( (item) => cantidad= cantidad + item.cant  ) 
            return cantidad;
        }

        //CART
        const TotalCompra = ()=>{
            const preciototal = 0
             
            return preciototal
        }

    return(
        <Provider value={ { Funcioncontexto, TotalCompra ,getItemfromCarrito , carrito, CantidadenCarrito, AgregarAlCarrito, removeFromCart, ClearCarrito } }>
            {children}
        </Provider>
    )

}

export default useCartContext