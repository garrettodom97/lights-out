import React from "react";
import "./tile.css";

function Tile(id, onClick, isActive) {
  return (
    <div>
      <button
        className={isActive ? "tile on" : "tile"}
        onClick={onClick}
      ></button>
    </div>
  );
}

export default Tile;
