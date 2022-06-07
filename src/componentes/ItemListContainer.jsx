import { useEffect, useState } from "react"
import Itemlist from "./Itemlist"
import { getAllItems, getItemsbyCategory } from '../DataBase/index.jsx'
import { useParams } from "react-router-dom";



function ItemListContainer(props) {
    const { categoId }= useParams()
    const [articulodisponible, setarticulodisponible] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        
            if ( categoId === undefined ) {
                        getAllItems( ).then((result) => {
                        
                        setarticulodisponible(result)
                        //.finally(() => setloading(false))
                        setloading(false)
                        })
            }
            
            else{
            getItemsbyCategory( categoId ).then((result) => {
                
                setarticulodisponible(result)
                //.finally(() => setloading(false))
                setloading(false)
            })
        }
           
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