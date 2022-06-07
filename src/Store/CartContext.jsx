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
        console.log(carrito);
        const CantidadenCarrito = ( carrito )=>{
            let cantidad = 0;
            if(carrito.length!=0){
                //cantidad = 5
                carrito.map( (item) => cantidad= cantidad + item.cant)
                return cantidad;
            }
           
                //carrito.foreach( (item) => cantidad= cantidad + item.cant)
            
            //foreach del cart e ir sumando al "can", la cantidad de este item 
            
        }

        //CART- TOTAL DE LA COMPRA
        const TotalCompra = ( total_parcial )=>{
            //let precio_parcial=0;
            let preciototal = 0;
            preciototal = preciototal + total_parcial
            return preciototal   
        }

    return(
        <Provider value={ { Funcioncontexto, TotalCompra ,getItemfromCarrito , carrito, CantidadenCarrito, AgregarAlCarrito, removeFromCart, ClearCarrito } }>
            {children}
        </Provider>
    )

}

export default useCartContext