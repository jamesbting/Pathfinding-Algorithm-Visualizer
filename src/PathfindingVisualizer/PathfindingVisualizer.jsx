import React, {Component} from 'react';
import Node from './Node/Node';

import './PathfindingVisualizer.css';

const numRows = 15; //number of rows in the grid
const numCols = 50; // number of columns in the grid


export default class PathfindingVisualizer extends Component {
  
    constructor (props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {
        const nodes = []
        for(let row = 0; row < numRows; row++) {
            const currentRow = [];
            for (let col = 0; col < numCols; col++) {
                currentRow.push([]);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes})
    }


    render () {
        const {nodes} = this.state;
        console.log(nodes)
        return (
            <div className = "grid">
                {nodes.map((row, rowIndex) => {
                    return <div> 
                        {row.map((node,nodeIndex) => <Node></Node>)}
                        </div>
                        }
                    )
                }
            </div>
        );
    }
}