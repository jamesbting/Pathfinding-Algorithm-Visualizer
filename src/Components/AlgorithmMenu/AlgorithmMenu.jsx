import React from "react";
import Dijkstra from "../../Algorithms/Dijkstra.js";
import ASearch from "../../Algorithms/ASearch";

import { Menu, Button, MenuItem } from "@material-ui/core";

import "./AlgorithmMenu.css";

export default function AlgorithmMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (algorithm) => {
    setAnchorEl(null);
  };

  const handleSelect = (algorithm) => {
    const changeAlgorithm = props.handler;
    setAnchorEl(null);
    changeAlgorithm(algorithm);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Select an algorithm</MenuItem>
        <MenuItem onClick={() => handleSelect(new Dijkstra())}>
          Dijkstra's Algorithm
        </MenuItem>
        <MenuItem onClick={() => handleSelect(new ASearch())}>
          A * Search
        </MenuItem>
      </Menu>
    </div>
  );
}
