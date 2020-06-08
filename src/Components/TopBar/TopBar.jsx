import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AlgorithmMenu from "../AlgorithmMenu/AlgorithmMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pathfinding Algorithm Visualizer
          </Typography>
          {/* Algorithm Menu button */}
          {/* <AlgorithmMenu
            handler={props.handler}
            variant="contained"
            title="Select an algorithm"
          ></AlgorithmMenu> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
