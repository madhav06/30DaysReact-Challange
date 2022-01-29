import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/core/icons/ArrowDrowUpIcon";
import ArrowDropDrownIcon from "@material-ui/core/icons/ArrowDropDrownIcon";

export default function Navbar({ clickHandler, onShowMap, showMap }) {
  const [toggleArrow, setToggleArrow] = useState(false);

  return (
    <div className="navbar">
      <span>Filtros</span>
      <Button
        onClick={() => {
          clickHandler();
          setToggleArrow(!toggleArrow);
        }}
      >
        {!toggleArrow ? <ArrowDropUpIcon /> : <ArrowDropDrownIcon />}
      </Button>

      <Button variant="contained" color="primary" onClick={() => onShowMap()}>
        {!showMap ? "Map" : "List"}
      </Button>
    </div>
  );
}
