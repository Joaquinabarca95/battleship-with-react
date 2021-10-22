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

  // randomizar en cada juego?

  const [playerBoardSchema, setPlayerBoardSchema] = useState(playerBoardSchema1);
  const [computerBoardSchema, setComputerBoardSchema] = useState(computerBoardSchema1);
  const [clickedCell, setClickedCell] = useState("");
  const [activePlayer, setActivePlayer] = useState(true); // false yo, true pc

  const checkIfShip = (cellValue, toggleSetMissed, apellido, position) => {
    let newPlayerBoardSchema = [...playerBoardSchema];
    let newComputerBoardSchema = [...computerBoardSchema];
    console.log(cellValue, "ESTA ES CELL VALUE", apellido, "ESTE DISPARO");
    if (cellValue === 0) {
      if (apellido === "player") {
        newPlayerBoardSchema[position[0]][position[2]] = 3;
        console.log(newPlayerBoardSchema);
        setPlayerBoardSchema(newPlayerBoardSchema);
      } else if (apellido === "computer") {
        newComputerBoardSchema[position[0]][position[2]] = 3;
        console.log(newComputerBoardSchema);
        setComputerBoardSchema(newComputerBoardSchema);
      }
      console.log("missed en", apellido);
      toggleSetMissed();
    } else if (cellValue === 1) {
      console.log(apellido, "le ashunto en", cellValue);
      if (apellido === "player") {
        newPlayerBoardSchema[position[0]][position[2]] = 2;
        console.log(newPlayerBoardSchema, "tablero de player");
        setPlayerBoardSchema(newPlayerBoardSchema);
      } else if (apellido === "computer") {
        newComputerBoardSchema[position[0]][position[2]] = 2;
        console.log(newComputerBoardSchema, "tablero computer");
        setComputerBoardSchema(newComputerBoardSchema);
      }
    }
  };

  const toggleClickedCell = (
    position,
    cellValue,
    toggleSetMissed,
    apellido,
    toggleSetContador,
    toggleActivePlayer,
    activePlayer
  ) => {
    setClickedCell(position);
    console.log(position, cellValue);
    checkIfShip(cellValue, toggleSetMissed, apellido, position);
    toggleSetContador();
    toggleActivePlayer(activePlayer);
  };

  const [playedCells, setPlayedCells] = useState([])
  const [repeatedCells, setRepeatedCells] = useState([])

  const pcTurn = () => {
    let randomCol = Math.floor(Math.random() * 9);
    let randomRow = Math.floor(Math.random() * 9);
    let position = parseInt(randomRow.toString() + randomCol.toString());
    let positionNueva = null;
    let contador = 0
    let newPlayerBoardSchema = [...playerBoardSchema];
    let cellValue = newPlayerBoardSchema[randomRow][randomCol];
    console.log(position);
    for (let x = 0; x < newPlayerBoardSchema.length; x++) {
      for (let y = 0; y < newPlayerBoardSchema.length[x]; y++) {
          if (x === position[0] && y === position[1]) {
            console.log("Me quebro en"+ contador)
            positionNueva = contador
            cellValue = newPlayerBoardSchema[positionNueva]
            console.log(positionNueva, "posicion nueva");
              
          }
          else{
            contador += 1
          }
          }
      }
      console.log(contador, "contador")
    let cellToChange = document.querySelectorAll("#cell")[position]
    console.log(cellValue, "ESTA ES CELL VALUE RANDOM", cellToChange);
    // let indexCell =
    while (cellValue === 2 || cellValue === 3){
      let randomCol = Math.floor(Math.random() * 9);
      let randomRow = Math.floor(Math.random() * 9);
      let position = parseInt(randomRow.toString() + randomCol.toString());
      cellValue = newPlayerBoardSchema[randomRow][randomCol];
      cellToChange = document.querySelectorAll("#cell")[position]
    }
    
    if (cellValue === 0 || cellValue === 3){
      cellValue = 3
      setPlayerBoardSchema(newPlayerBoardSchema)
      cellToChange.classList.add("cell", "missed")
      cellToChange.innerHTML = "X"
      
      console.log(cellToChange, "entrooooooo");
      
    }
    else if(cellValue === 1 || cellValue === 2){
      console.log(cellToChange, "entroooo tambien");
      cellValue = 2
      cellToChange.classList.add("cell", "hitPlayer")
      setPlayerBoardSchema(newPlayerBoardSchema)
      
    }
    
    console.log(position, cellValue, "position y cellvalue PC");
    console.log(playerBoardSchema);
    toggleSetContador();

    //MODIFICAR TABLEROOOO
  };

  const [contador, setContador] = useState(0);
  const toggleSetContador = () => {
    setContador(contador + 1);
    console.log("Se esta ejecutando el contador correctamente");
  };

  useEffect(() => {
      pcTurn();
      toggleActivePlayer(activePlayer);
      breaker() 
  }, [computerBoardSchema]);

  const toggleActivePlayer = (activePlayer) => {
    //OK
    setActivePlayer(!activePlayer);
    console.log(activePlayer, "este juega");
  };
  function breaker(){
    console.log("==============================");
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
