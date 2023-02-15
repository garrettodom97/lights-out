import React, { useState } from "react";
import "./board.css";
import Tile from "./tile.js";

function Board() {
  let boardSize = 5;
  const [tiles, setTiles] = useState(generateStartingBoard());

  function generateStartingBoard() {
    let startingTiles = new Array(5);
    for (let i = 0; i < boardSize; i++) {
      var tileCols = new Array(5);
      for (let j = 0; j < boardSize; j++) {
        tileCols[j] = (
          <Tile
            id={`${i}${j}`}
            onClick={() => updateTiles(tiles, { i: i, j: j })}
            isActive={Math.random() < 0.5}
          ></Tile>
        );
      }
      startingTiles[i] = tileCols;
    }
    return startingTiles;
  }

  function updateTiles(tiles, id) {
    console.log(tiles);
    for (let i = 0; i < boardSize; i++) {
      var tileCols = tiles[i];
      for (let j = 0; j < boardSize; j++) {
        if (i === id.i && j === id.j) {
          console.log(tileCols);
          tileCols[j].props.isActive = !tileCols[j].props.isActive;
        }
      }
    }
  }

  return (
    <div className="board">
      {tiles.map((tileCols, i) => {
        return (
          <ul>
            {tileCols.map((tile, j) => {
              return <li key={tile.id}> {tile} </li>;
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default Board;
