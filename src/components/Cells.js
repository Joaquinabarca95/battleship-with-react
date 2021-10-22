import React, {useState} from 'react'


const Cells = (props) => {
    const valorCelda = (props.cellValue)
    const [missed, setMissed] = useState(false)
    const colorHit = props.colorHit
    const toggleSetMissed = () => {
        if (valorCelda === 0){
            setMissed(true)
        } else if (valorCelda !== 0){
            setMissed(false)
        }
    }



const [contador, setContador] = useState(0)
const toggleSetContador = ()=>{
    setContador(contador+1)
    console.log("Se esta ejecutando el contador correctamente")
}

const activePlayer = props.activePlayer


    return (
        <div id="cell" className={contador===0 ? "cell " : (missed ? "cell missed" : "cell "+ colorHit)} 
        onClick={(e)=> props.toggleClickedCell(props.index, valorCelda, toggleSetMissed, props.apellido,toggleSetContador, props.toggleActivePlayer, activePlayer, props.colorHit)}>
            {missed === true ? "X" : ""}
        </div>
    )
}

export default Cells