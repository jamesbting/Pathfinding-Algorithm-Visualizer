import React from "react";
import Dijkstra from "../../Algorithms/Dijkstra.js";
import ASearch from "../../Algorithms/ASearch";
import { makeStyles } from "@material-ui/core/styles";

import { Menu, Button, MenuItem } from "@material-ui/core";

import "./AlgorithmMenu.css";

export default function AlgorithmMenu(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //if the user hasnt selected an option, just close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  //if the user has selected an option
  const handleSelect = (algorithm) => {
    const changeAlgorithm = props.handler;
    setAnchorEl(null);
    changeAlgorithm(algorithm);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant={props.variant}
        color={props.color}
      >
        {props.title}
      </Button>
      <Menu
        className="menu"
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
