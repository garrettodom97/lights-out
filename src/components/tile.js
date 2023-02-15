import React from "react";
import "./tile.css";

function Tile(props) {
  return (
    <div>
      <button
        className={props.isActive ? "tile on" : "tile"}
        onClick={props.onClick}
      ></button>
    </div>
  );
}

export default Tile;
