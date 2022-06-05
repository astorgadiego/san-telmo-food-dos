import Item from "./Item";

function Itemlist({articuloArray}) {
  return (
    <div >
      

          {articuloArray.map((diego)=><Item key={diego.id} art={diego} img={diego.imagenURL}/>)}
          
      
    </div>
    
  )
}

export default Itemlist