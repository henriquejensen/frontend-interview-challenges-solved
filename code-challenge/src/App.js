import React, { Component } from 'react';
import { mouseDown } from '../src/containers/canvasController';
import { isPointSelected } from '../src/helpers';
import { NUMBER_OF_POINTS } from '../src/constants';
import './App.css';

class App extends Component {

  state = {
    points: [],
    pointSelected: null
  }

  componentDidMount(prev) {
    this.canvas = this.refs.canvas;
    this.context = this.canvas.getContext('2d');
    this.CONTAINER = {
      x: 0,
      y: 0,
      width: this.canvas.width,
      height: this.canvas.height
    };
  }

  componentDidUpdate(prev) {
    this.context = this.canvas.getContext('2d');
  }

  initScreen = () => {
    this.context.fillStyle = 'black';
    this.context.fillRect(this.CONTAINER.x,this.CONTAINER.y,this.CONTAINER.width,this.CONTAINER.height);
  }

  handleMouseDown = (evt) => {
    const { clientX, clientY } = evt;
    const { points } = this.state;

    if (points.length < NUMBER_OF_POINTS) {
      this.setState({
        points: points.concat({ x: clientX, y: clientY })
      });
    } else {
      const pointSelected = isPointSelected(clientX, clientY, points);

      if (pointSelected !== null && pointSelected !== this.state.pointSelected) {
        this.setState({ pointSelected });
      } else {
        this.setState({ pointSelected: null });
      }
    }

    requestAnimationFrame(this.renderCanvas);
  }

  handleMouseMove = (evt) => {
    const { clientX, clientY } = evt;
    const { pointSelected, points } = this.state;

    if (pointSelected !== null) {
      const newPoints = points.concat();
      newPoints[pointSelected] = { x: clientX, y: clientY };
      this.setState({ points: newPoints });
    }

    requestAnimationFrame(this.renderCanvas);
  }

  renderCanvas = () => {
    this.initScreen();

    const { points } = this.state;
    points.map(({ x, y }) => mouseDown(this.context, points, x, y));
  }

  render() {
    const { innerWidth, innerHeight } = window;

    return (
      <canvas
        ref='canvas'
        width={innerWidth}
        height={innerHeight}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      />
    )
  }
}

export default App;
