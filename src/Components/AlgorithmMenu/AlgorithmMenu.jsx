// function that returns a div that is an algorithm menu, allowing the user to select an algorithm
import React from "react";
import Dijkstra from "../../Algorithms/Dijkstra.js";
import ASearch from "../../Algorithms/ASearch";
import DepthFirstSearchIterative from "../../Algorithms/DepthFirstSearchIterative";
import DepthFirstSearchRecursive from "../../Algorithms/DepthFirstSearchRecursive";
import BreadthFirstSearch from "../../Algorithms/BreadthFirstSearch";
import { makeStyles } from "@material-ui/core/styles";

import { Menu, Button, MenuItem } from "@material-ui/core";

import "./AlgorithmMenu.css";

export default function AlgorithmMenu(props) {
  //set the style for the menu
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

  //if the user hasn't selected an option, just close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  //if the user has selected an option, change the algorithm and
  const handleSelect = (algorithm) => {
    const changeAlgorithm = props.handler;
    setAnchorEl(null);
    changeAlgorithm(algorithm);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*  Button that controls the opening and closing of the menu */}
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
        {/* To add more items, simply import the algorithm, and then call handleSelect with a new instance of the algorithm as a parameter */}
        <MenuItem onClick={() => handleSelect(new Dijkstra())}>
          Dijkstra's Algorithm
        </MenuItem>
        <MenuItem onClick={() => handleSelect(new ASearch())}>
          A * Search
        </MenuItem>
        <MenuItem onClick={() => handleSelect(new DepthFirstSearchIterative())}>
          Depth First Search (Iterative)
        </MenuItem>
        <MenuItem onClick={() => handleSelect(new BreadthFirstSearch())}>
          Breadth First Search
        </MenuItem>
        {/* <MenuItem onClick={() => handleSelect(new DepthFirstSearchRecursive())}>
          Depth First Search (Recursive)
        </MenuItem> */}
      </Menu>
    </div>
  );
}
