import { useEffect, useState } from "react"
import Itemlist from "./Itemlist"
import Datos from "./Datos"
import { useParams } from "react-router-dom";

function ObtenerdatosdeBD(categoriaId) {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (categoriaId=== undefined) {
                resolve(Datos)
            }
            const prodrequested = Datos.filter(p=>p.tipo== categoriaId  )
            resolve(prodrequested)
            //resolve(Datos)
        }, 2000);
    })
}

function ItemListContainer(props) {
    const { categoId }= useParams()
    const [articulodisponible, setarticulodisponible] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        ObtenerdatosdeBD(categoId).then((result) => {
            console.log("Termino la carga de datos", result)
            setarticulodisponible(result)

        })
            .finally(() => setloading(false))
    }, [categoId])

    return (
        <>
        <div className="flex flex-col items-center ">
            <h1 className="m-20 font-serif">{props.saludo}</h1>
            <div className=" w-full">
            {loading ? <iframe src="https://giphy.com/embed/swhRkVYLJDrCE" width="100%" height="100%"  allowFullScreen></iframe>:(<Itemlist articuloArray={articulodisponible} /> )}
            </div>
        </div>
        </>
    )
}

export default ItemListContainer