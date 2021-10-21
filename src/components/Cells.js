import React, {useState} from 'react'


const Cells = (props) => {
    const [missed, setMissed] = useState(false)
    
    return (
        <div className="cell" value={props.index} onClick={(e)=> props.toggleClickedCell(props.index)}>
            {missed === true ? "X" : props.index}
        </div>
    )
}

export default Cells
