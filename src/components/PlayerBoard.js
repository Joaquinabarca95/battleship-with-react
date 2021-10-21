import React from 'react'
import Cells from './Cells'

const PlayerBoard = (props) => {

    const playerBoard = props.playerBoardSchema.map((array, indexFila) => {
        return array.map((cell, indexCell, activePlayer) => {
            return <Cells key={indexFila.toString() + indexCell.toString()} 
            index={indexFila.toString() + "," + indexCell.toString()} 
            cellValue={cell} toggleClickedCell={props.toggleClickedCell} 
            apellido="player" colorHit={"hitPlayer"} 
            className={activePlayer === true ? "disabled" : ""} 
            toggleActivePlayer={props.toggleActivePlayer}
            activePlayer={activePlayer}/>
        })
    })

    const computerBoard = props.computerBoardSchema.map((array, indexFila) => {
        return array.map((cell, indexCell, activePlayer) => {
            return <Cells key={indexFila.toString() + indexCell.toString()} 
            index={(indexFila.toString()) + "," + (indexCell.toString())} 
            cellValue={cell} toggleClickedCell={props.toggleClickedCell} 
            apellido="computer" colorHit={"hitPc"} 
            className={activePlayer === true ? "disabled" : ""} 
            toggleActivePlayer={props.toggleActivePlayer}
            activePlayer={activePlayer}/>
        })
    })

    return (
        <>
        <div className="gameBoard">
            <div className={props.activePlayer === true ? "playerBoard" : "playerBoard disabled"}>
                <div className="title">
                    <h3>Player Board</h3>
                </div>
            {playerBoard}
            </div>
            
            <div className={props.activePlayer === false ? "computerBoard" : "computerBoard disabled"}>
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
