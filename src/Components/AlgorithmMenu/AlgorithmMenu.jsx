// function that returns a div that is an algorithm menu, allowing the user to select an algorithm
import Dijkstra from "../../Algorithms/Dijkstra.js";
import ASearch from "../../Algorithms/ASearch";
//import DepthFirstSearchIterative from "../../Algorithms/DepthFirstSearchIterative";
import DepthFirstSearchRecursive from "../../Algorithms/DepthFirstSearchRecursive";
import BreadthFirstSearch from "../../Algorithms/BreadthFirstSearch";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Menu, MenuItem } from "@material-ui/core";

import "./AlgorithmMenu.css";

export default function AlgorithmMenu(props) {
  /* To add more items, simply import the algorithm, and add it to the algorithms array below (make sure it extends the abstract algorithm class)  */
  const algorithms = [
    new Dijkstra(),
    new ASearch(),
    /*new DepthFirstSearchIterative(),*/
    new DepthFirstSearchRecursive(),
    new BreadthFirstSearch(),
  ];

  //get the algorithm names
  const options = [];
  for (let i = 0; i < algorithms.length; i++) {
    options.push(algorithms[i].getAlgorithmName());
  }

  //set the style for the menu
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //if the user hasn't selected an option, just close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  //if the user has selected an option, change the algorithm and
  const handleSelect = (algorithm, index) => {
    const changeAlgorithm = props.handler;
    setAnchorEl(null);
    changeAlgorithm(algorithm);
    setSelectedIndex(index);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClick}
          variant="contained"
          color="inherited"
        >
          <ListItemText
            primary="Select an Algorithm"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleSelect(algorithms[index], index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
