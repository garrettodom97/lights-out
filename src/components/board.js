import React, { useState } from "react";
import "./board.css";
import Tile from "./tile.js";
import Counter from "./counter.js";

function Board() {
  let boardSize = 5;
  const [grid, setGrid] = useState(generateStartingGrid());
  const [count, setCount] = useState(0);

  function generateStartingGrid() {
    let startingGrid = new Array(5);
    for (let i = 0; i < boardSize; i++) {
      var gridCols = new Array(5);
      for (let j = 0; j < boardSize; j++) {
        gridCols[j] = Math.random() < 0.5;
      }
      startingGrid[i] = gridCols;
    }
    return startingGrid;
  }

  function updateGrid(id, grid) {
    let newGrid = grid.map((gridCols, i) =>
      gridCols.map((tile, j) => (tile = changeTile(tile, id, i, j)))
    );
    setGrid(newGrid);
    setCount(count + 1);
    checkWin(newGrid);
    console.log(newGrid);
  }

  function changeTile(tile, id, i, j) {
    if (
      (i === id.i && j === id.j) ||
      (i === id.i - 1 && j === id.j) ||
      (i === id.i && j === id.j - 1) ||
      (i === id.i + 1 && j === id.j) ||
      (i === id.i && j === id.j + 1)
    ) {
      return !tile;
    }
    return tile;
  }

  var modal = document.getElementById("winModal");

  function resetGame() {
    var modal = document.getElementById("winModal");
    modal.style.display = "none";
    setGrid(generateStartingGrid);
    setCount(0);
  }

  function checkWin(grid) {
    console.log("CHECKING");
    console.log(grid.flat().filter((tile) => tile));
    if (grid.flat().filter((tile) => tile).length === 0) {
      console.log("WINNNNNER");
      modal.style.display = "block";
    }
  }

  return (
    <div>
      <div className="info">
        <Counter count={count}></Counter>
        <button className="reset" onClick={() => resetGame()}>
          <h4>Reset</h4>
        </button>
      </div>
      <div className="board">
        {grid.map((gridCols, i) => {
          return (
            <ul>
              {gridCols.map((tile, j) => {
                return (
                  <li key={tile.id}>
                    <Tile
                      key={`${i}${j}`}
                      onClick={() => updateGrid({ i: i, j: j }, grid)}
                      isActive={tile}
                    ></Tile>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>

      <div id="winModal" className="modal">
        <div className="modal-content">
          <h1 className="win-text">YOU WIN!</h1>
          <button className="reset" onClick={() => resetGame()}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
