import React from 'react'
import Cells from './Cells'

const PlayerBoard = (props) => {

    const playerBoard = props.playerBoardSchema.map((array, indexFila,) => {
        return array.map((cell, indexCell) => {
            return <Cells key={indexFila.toString() + indexCell.toString()} index={indexFila.toString() + "," + indexCell.toString()} cellValue={cell} toggleClickedCell={props.toggleClickedCell} apellido="player" colorHit={"hitPlayer"} />
        })
    })

    const computerBoard = props.computerBoardSchema.map((array, indexFila,) => {
        return array.map((cell, indexCell) => {
            return <Cells key={indexFila.toString() + indexCell.toString()} index={(indexFila.toString()) + "," + (indexCell.toString())} cellValue={cell} toggleClickedCell={props.toggleClickedCell} apellido="computer" colorHit={"hitPc"} />
        })
    })

    return (
        <>
        <div className="gameBoard">
            <div className="playerBoard">
                <div className="title">
                    <h3>Player Board</h3>
                </div>
            {playerBoard}
            </div>
            
            <div className="computerBoard">
                <div className="title">
                    <h3>Computer Board</h3>
                </div>
            {computerBoard}
            </div>
        </div>

            </>
    )
}

export default PlayerBoard
