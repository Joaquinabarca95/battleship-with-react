import React, {useState} from 'react'


const Cells = (props) => {
    const valorCelda = (props.cellValue)
    const apellido = props.apellido
    const [missed, setMissed] = useState(false)
    const [fired, setFired] = useState(false)
    const toggleSetMissed = () => {
        console.log("togglesetmissed");
        if (valorCelda === 0){
            setMissed(true)        
            console.log("missed");
        } else if (valorCelda !== 0){
            setMissed(false)
            console.log("fired");
        }
    }
    const asignarClase = () => {
        setFired(true)
        console.log("holi");
        if (missed === true){
            let missedCell = "missed"
            console.log("holi missed");
            return missedCell
        } else if (missed === false){
            let colorHit = props.colorHit
            console.log("holi hit");
            return colorHit
        }
    }

    const [contador, setContador] = useState(0)
    const toggleSetContador = () => {
        console.log(contador , "contadoroor");
        setContador(1)
    }

    

    return (
        <div className={contador > 0 ? (asignarClase() + "cell ") : "cell"} 
        onClick={(e)=> props.toggleClickedCell(props.index, valorCelda, toggleSetMissed, props.apellido, asignarClase, toggleSetContador)}>
            {missed === true ? "X" : props.index}
        </div>
    )
}

export default Cells
