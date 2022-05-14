import React, {useState} from "react"

function ItemCount(props) {
    const [contador, setcontador] = useState(props.initial)

    function handleAdd() {
        if (contador < props.stock) {
            setcontador(contador+1)
        }
    }


    function handleSubstract() {
        if (contador > 1) {
            setcontador(contador-1)
        }
    }
  return (
    <div>
        <div>
            <h1>
                Compra Tus Items
            </h1>
            <div>
                <div>
                    <button onClick={handleSubstract} >-</button>
                    <span> {contador} </span>
                    <button onClick={handleAdd} >+</button>
                </div>
                <div>
                    <button onClick={() => props.agregado(contador)}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ItemCount