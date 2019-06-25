import React, { Component } from 'react';
import canvasController from '../src/containers/canvasController';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.context = this.canvas.getContext('2d');
    const CONTAINER = {
      x: 0,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height
    };
    this.context.fillRect(CONTAINER.x,CONTAINER.y,CONTAINER.width,CONTAINER.height);
  }

  render() {
    const { innerWidth, innerHeight } = window;

    return (
      <canvas
        ref='canvas'
        width={innerWidth}
        height={innerHeight}
        onMouseDown={(evt) => canvasController(this.context, evt)}
        // onMouseMove={(evt) => canvasController(this.context, evt)}
      />
    )
  }
}

export default App;
