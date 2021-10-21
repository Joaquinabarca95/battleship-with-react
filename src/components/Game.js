import React, { useState, useEffect } from "react";
import PlayerBoard from "./PlayerBoard";

const Game = () => {
  // 0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot
  let playerBoardSchema1 = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ];

  
  let computerBoardSchema1 = [
    [0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  ];
  
  const [playerBoardSchema, setPlayerBoardSchema] = useState(playerBoardSchema1)
  const [computerBoardSchema, setComputerBoardSchema] = useState(computerBoardSchema1)
  const [clickedCell, setClickedCell] = useState("");
  const [activePlayer, setActivePlayer] = useState(false); // 0 yo, 1 pc

  const checkIfShip = (cellValue, toggleSetMissed, apellido, position) => {
    if (cellValue === 0){
      if (apellido === "player"){
        playerBoardSchema1[position[0]][position[2]] = 3
        console.log(playerBoardSchema1);
        setPlayerBoardSchema(playerBoardSchema1)
      } else if (apellido === "computer"){
        computerBoardSchema1[position[0]][position[2]] = 3
        console.log(computerBoardSchema1);
        setComputerBoardSchema(computerBoardSchema1)
      }
      console.log("missed");
      console.log(apellido);
      toggleSetMissed()
    } else if (cellValue === 1) {
      console.log("le ashunto en", cellValue);
      console.log(apellido);
      if (apellido === "player"){
        playerBoardSchema1[position[0]][position[2]] = 2
        console.log(playerBoardSchema1);
        setPlayerBoardSchema(playerBoardSchema1)
      } else if (apellido === "computer"){
        computerBoardSchema1[position[0]][position[2]] = 2
        console.log(computerBoardSchema1);
        setComputerBoardSchema(computerBoardSchema1)
      }
    }
  } 

  const toggleClickedCell = (position, cellValue, toggleSetMissed, apellido,toggleSetContador, toggleActivePlayer, activePlayer) => {
    setClickedCell(position);
    console.log(position, cellValue);
    checkIfShip(cellValue, toggleSetMissed, apellido, position)
    toggleSetContador()
    toggleActivePlayer(activePlayer)
  };


  const toggleActivePlayer = (activePlayer) => {
    setActivePlayer(!activePlayer)
    console.log(activePlayer, "este juega");
  }

  return (
    <div>
      <div className="container">
        <h1>Battleship</h1>
        <div className="board">
          <PlayerBoard 
          toggleActivePlayer={toggleActivePlayer}
          activePlayer={activePlayer}
            toggleClickedCell={toggleClickedCell}
            playerBoardSchema={playerBoardSchema}
            computerBoardSchema={computerBoardSchema}
          />
        </div>
      </div>
      <div className="instructions">
        <h4>How To Play:</h4>
        <p>Click on the computer board and try to sink all its ships!</p>
      </div>
    </div>
  );
};

export default Game;
