import React from 'react'
import Cells from './Cells'

const PlayerBoard = (props) => {

    const primerMapeo = props.playerBoardSchema.map((array, indexFila,) => {
        return array.map((cell, indexCell) => {
            return <Cells key={indexFila.toString() + indexCell.toString()} index={indexFila.toString() + indexCell.toString()} cellValue={cell} toggleClickedCell={props.toggleClickedCell}/>
        })
    })

    const segundoMapeo = props.computerBoardSchema.map((array, indexFila,) => {
        return array.map((cell, indexCell) => {
            return <Cells key={indexFila.toString() + indexCell.toString()} index={indexFila.toString() + indexCell.toString()} cellValue={cell} toggleClickedCell={props.toggleClickedCell}/>
        })
    })

    return (
        <>
        <div className="gameBoard">
            <div className="playerBoard">
                <div className="title">
                    <h3>Player Board</h3>
                </div>
            {primerMapeo}
            </div>
            
            <div className="computerBoard">
                <div className="title">
                    <h3>Computer Board</h3>
                </div>
            {segundoMapeo}
            </div>
        </div>

            </>
    )
}

export default PlayerBoard
