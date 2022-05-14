import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Datos from "./Datos";
import Itemdetalle from "./Itemdetalle";

function ItemdetailConteiner() {
    const {prodId}=useParams()
    const [product, setproduct] = useState({})

    useEffect(() => {  
        (async () => { 
            const productData = await getItems()
            if (productData) {
             setproduct(productData)
             }
            })()
            }, [prodId])

    const getItems=()=>{
        return new Promise ((resolve, reject)=>{
            setTimeout(() => {
                const prodrequested = Datos.find(p=>p.id==Number( prodId ) )
                resolve(prodrequested)
            }, 2000);
        })
    }

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