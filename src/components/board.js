import React, { useState } from "react";
import "./board.css";
import Tile from "./tile.js";

function Board() {
  let boardSize = 5;
  const [grid, setGrid] = useState(generateStartingGrid());
  console.log(grid);

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
    console.log(grid);

    setGrid(
      grid.map((gridCols, i) =>
        gridCols.map((tile, j) => (tile = changeTile(tile, id, i, j)))
      )
    );

    console.log(grid);
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

  return (
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
  );
}

export default Board;
