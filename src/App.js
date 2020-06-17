import React from "react";
import "./App.css";
import PathfindingVisualizer from "./Components/PathfindingVisualizer";
import { Helmet } from "react-helmet";
const TITLE = "James Ting's Pathfinding Algorithm Visualizer";

function App() {
  // store everything  other files, as to not break any of the autogenerated files
  return (
    <div className="App">
      <Helmet>
        {" "}
        <title>{TITLE}</title>
      </Helmet>

      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;