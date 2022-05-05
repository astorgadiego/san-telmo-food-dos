import { useEffect, useState } from "react"
import Itemlist from "./Itemlist"
import Datos from "./Datos"

function ObtenerdatosdeBD(){
        return new Promise((resolve,rejected)=>{
            setTimeout(() => {
                resolve(Datos)
            }, 2000);  
        })
}

function ItemListContainer(props) {
    const [articulodisponible, setarticulodisponible] = useState([])

        useEffect(()=>{

        ObtenerdatosdeBD().then((result)=>{
            console.log("Termino la carga de datos", result)
            setarticulodisponible(result)
            
        })
    },[])
    
    return (
        <>
            <h1 className="m-20 font-serif">{props.saludo}</h1>
            <Itemlist  articuloArray={articulodisponible}/> 
        </>
    )
}

export default ItemListContainer