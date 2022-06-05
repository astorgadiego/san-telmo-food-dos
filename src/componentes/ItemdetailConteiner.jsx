import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Itemdetalle from "./Itemdetalle";
import { getItemDetalle as getItems } from '../DataBase/index.jsx'

function ItemdetailConteiner() {
    const {prodId}=useParams()
    const [product, setproduct] = useState(  )

    useEffect(() => {  
                (async () => { 
                    
                    const productData = await getItems( prodId )
                    

                        if (productData) {
                        setproduct(productData)
                    } 
                     
                    }
                )  ()
    }, [prodId])


  return (
      <>
      <div className="bg-yellow-400 mt-1" style={{border:'solid rgb(68 64 60) 5px', margin:'10px', padding:'5px'}}>
        <div>Detalle del Producto - {prodId}</div>
        <Itemdetalle prodseleccionado={product}></Itemdetalle>
        </div>
    </>
  )
}


export default ItemdetailConteiner