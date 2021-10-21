import React, {useState} from 'react'


const Cells = (props) => {
    const [missed, setMissed] = useState(false)
    
    return (
        <div className="cell" onClick={(e)=> props.toggleClickedCell(props.index)}>
            {missed === true ? "X" : ""}
        </div>
    )
}

export default Cells
