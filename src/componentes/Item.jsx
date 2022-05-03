function Item({elem}) {
  return (
    <div style={{border:'solid green 5px', margin:'10px', padding:'5px'}}>
    <div>{elem.titulo}</div>
    <div>{elem.precio}</div>
    <div>{elem.imagenURL}</div>
    </div>
  )
}
export default Item