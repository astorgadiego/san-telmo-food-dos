import { useEffect, useState } from "react"
import Itemlist from "./Itemlist"
import Datos from "./Datos"


function ItemListContainer(props) {
    const [articulodisponible, setarticulodisponible] = useState([])

    useEffect(()=>{
        const verarticulos=new Promise((resolve,rejected)=>{
            setTimeout(() => {
            resolve(Datos)
            }, 2000);
        })

        verarticulos.then((result)=>{
            <Itemlist/>
            console.log("Termino la carga de datos", result)
            setarticulodisponible(result)
            
        },)
        .catch((err)=>{
                        console.log("Hubo un error")
                      })
    },[])
    
    return (
        <>
            <h1 className="m-20 font-serif">{props.saludo}</h1>
            <Itemlist/>
        </>
    )
}

export default ItemListContainer