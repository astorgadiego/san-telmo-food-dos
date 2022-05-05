function Item({art}) {
  return (
    <div key={art.id} style={{border:'solid green 5px', margin:'10px', padding:'5px'}}>
          <div>{art.titulo}</div>
          <div>${art.precio}</div>
          <img className="visible m-4" src={art.imagenURL} alt=""></img>
    </div>
  )
}
export default Item