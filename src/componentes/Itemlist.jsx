import Datos from "./Datos"
import Item from "./Item"


setTimeout(()=>{
},2000)

function Itemlist() {
  return (
    <ul>
        {Datos.map(diego=><Item key={diego.id} elem={diego}></Item>)}
    </ul>
  )
}

export default Itemlist